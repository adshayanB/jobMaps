import mongoose from "mongoose";
import { UserSchema } from "../models/userModel.js";
import { appSchema } from "../models/appModal.js";

const User = mongoose.model("User", UserSchema);
const App = mongoose.model("App", appSchema);

export const createApp = (req, res) => {
  const newApp = new App(req.body);
  newApp.userId = req.user._id;
  newApp.save((err, app) => {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    } else {
      return res.json(newApp);
    }
  });
};

export const getApp = (req, res) => {
  App.findById(req.body.ID, (err, app) => {
    if (err) {
      res.send(err);
    }
    return res.json(app);
  });
};

export const getAllApps = async (req, res) => {
  const appValues = await App.find({ userId: req.user._id }, (err, app) => {
    if (err) {
      res.send(err);
    }
  });

  return res.json(appValues);
};
