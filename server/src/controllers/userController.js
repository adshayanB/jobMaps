import mongoose from "mongoose";
// import jwt, { TokenExpiredError } from "jsonwebtoken";
import jwt from "jsonwebtoken";
const { TokenExpiredError } = jwt;
import bcrypt, { hash } from "bcrypt";
import { UserSchema } from "../models/userModel.js";
import sgMail from "@sendgrid/mail";
import e from "express";

const User = mongoose.model("User", UserSchema);
//Token verifcation
export const loginRequired = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized user!" });
  }
};

//Register User with
export const register = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err) throw err;
      if (user) {
        res.status(401).json({
          success: false,
          message: "Authentication failed: User with this email exists",
        });
      } else if (!user) {
        const newUser = new User(req.body);
        newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
        newUser.save((err, user) => {
          if (err) {
            return res.status(400).send({
              message: err,
            });
          } else {
            user.hashPassword = undefined;
            return res.json({ success: true, data: user });
          }
        });
      }
    }
  );
};

export const login = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Authentication failed: No user found",
        });
      } else if (user) {
        if (!user.comparePassword(req.body.password, user.hashPassword)) {
          res.status(401).json({
            success: false,
            message: "Authentication failed: Wrong Password",
          });
        } else {
          return res.json({
            success: true,
            token: jwt.sign(
              {
                _id: user.id,
              },
              "mY sEcReT kEy heheHEHEH",
              { expiresIn: "24h" }
            ),
          });
        }
      }
    }
  );
};

export const userInfo = (req, res) => {
  User.findById(req.user._id, (err, user) => {
    if (err) {
      res.send(err);
    }
    user.hashPassword = undefined;
    return res.json(user);
  });
};

export const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      hashPassword: bcrypt.hashSync(req.body.password, 10),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    },
    { new: true },
    (err, user) => {
      if (err) {
        res.send(err);
      }
      user.hashPassword = undefined;
      return res.json(user);
    }
  );
};

export const deleteUser = (req, res) => {
  User.remove({ _id: req.user._id }, (err) => {
    if (err) {
      res.send(err);
    }
    return res.json({ success: true, message: "Deleted User" });
  });
};

export const recoverPassword = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message:
            "The email address " +
            req.body.email +
            " is not associated with any account. Double-check your email address and try again.",
        });
      } else {
        const resetPasswordToken = jwt.sign(
          { _id: user._id },
          "mY sEcReT kEy heheHEHEH",
          { expiresIn: "1h" }
        );

        // send email
        const mailOptions = {
          to: user.email,
          from: "avipatel.dev@gmail.com",
          subject: "Password change request",
          text: `Hi ${user.lastName}, ${user.firstName} \n 
                  Please click on the following link to reset your password. \n\n 
                  If you did not request this, please ignore this email and your password will remain unchanged.\n`,
          html: `Hi ${user.lastName}, ${user.firstName} \n
                  Please click on the following <strong><a href="${
                    "http://localhost:3000/reset-password/" + resetPasswordToken
                  }" target="_blank">link</a></strong> to reset your password.`,
        };

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        sgMail
          .send(mailOptions)
          .then(() => {
            console.log("Email sent to " + user.email);
            return res.json({
              success: true,
              message: "Email sent!",
              token: resetPasswordToken,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

export const resetPassword = (req, res) => {
  const { password } = req.body;
  const { confirmPassword } = req.body;
  // check if password and confirmPassword are the same?
  const { token } = req.params;
  // const token = req.params["token"];
  console.log("Reset Password Token is: " + token);
  const decodedToken = jwt.verify(
    token,
    "mY sEcReT kEy heheHEHEH",
    (err, decode) => {
      if (err) {
        return res.json({ success: true, message: "Decode failed" });
      }
      return decode;
    }
  );

  const hash = bcrypt.hashSync(password, 10);
  console.log("Decoded token is: " + decodedToken._id);
  User.findById(decodedToken._id, (err, user) => {
    if (err) {
      console.log("Error! " + err);
    } else {
      if (!user) {
        console.log(`No user found with id: ${decodedToken._id}`);
      } else {
        user.hashPassword = hash;
        user
          .save((err) => {
            if (err) {
              return res.json({ success: true, message: err });
            }
          })
          .then((user) => {
            return res.json({
              success: true,
              message: user,
              decodedId: decodedToken._id,
            });
          });
      }
    }
  });
  /*
    .then((user) => {
      if (!user) {
        console.log(`No user found with id: ${decodedToken._id}`);
      } else {
        user.hashPassword = hash;

        user
          .save((err) => {
            if (err) {
              return res.json({ success: true, message: err });
            }
          })
          .then((user) => {
            return res.json({
              success: true,
              message: user,
              decodedId: decodedToken._id,
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
    */
  /*
  User.findOne({ _id: decodedToken._id }).then((user, err) => {
    if (err) {
      return res.json({ success: true, message: err });
    }
    if (!user) {
      return res.json({
        success: true,
        message: `User with id: ${decodedToken._id} does not exist.`,
      });
    } else {
      user.hashPassword = hash;

      user
        .save((err) => {
          if (err) {
            return res.json({ success: true, message: err });
          }
        })
        .then((user) => {
          return res.json({ success: true, message: user });
        });
    }
  }); */
};
