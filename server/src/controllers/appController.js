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

export const updateApp = (req, res) => {
  App.findOneAndUpdate(
    { _id: req.body.ID },
    {
      company: req.body.company,
      jobTitle: req.body.jobTitle,
      status: req.body.status,
      date_offer: req.body.date_offer,
      date_interview: req.body.date_interview,
      date_accept: req.body.date_accept,
      date_applied: req.body.date_applied,
      userId: req.user._id,
    },
    { new: true },
    (err, app) => {
      if (err) {
        res.send(err);
      }

      return res.json(app);
    }
  );
};

export const deleteApp = (req, res) => {
  App.remove({ _id: req.body.ID }, (err) => {
    if (err) {
      res.send(err);
    }
    return res.json({ message: "Deleted App" });
  });
};

export const filterByStatus = async (req, res) => {
  const appValues = await App.find(
    { userId: req.user._id, status: req.body.status },
    (err, app) => {
      if (err) {
        res.send(err);
      }
    }
  );
  return res.json(appValues);
};

export const filterByJobTitle = async (req, res) => {
  const appValues = await App.find(
    { userId: req.user._id, jobTitle: req.body.jobTitle },
    (err, app) => {
      if (err) {
        res.send(err);
      }
    }
  );
  return res.json(appValues);
};

export const filterByCompany = async (req, res) => {
  const appValues = await App.find(
    { userId: req.user._id, company: req.body.company },
    (err, app) => {
      if (err) {
        res.send(err);
      }
    }
  );
  return res.json(appValues);
};

export const sort = async (req, res) => {
  const searchField = req.body.field;
  if (searchField == "jobTitle") {
    const jobValues = await App.find({ userId: req.user._id })
      .collation({ locale: "en", strength: 2 })
      .sort({ jobTitle: req.body.order })
      .then((err) => {
        if (err) {
          res.send(err);
        }
      });
    return res.json(jobValues);
  } else if (searchField == "company") {
    const jobValues = await App.find({ userId: req.user._id })
      .collation({ locale: "en", strength: 2 })
      .sort({ company: req.body.order })
      .then((err) => {
        if (err) {
          res.send(err);
        }
      });
    return res.json(jobValues);
  } else {
    return res.json({ message: "Not support sort field" });
  }
};

export const sortByDate = async (req, res) => {
  const appValues = await App.find({ userId: req.user._id })
    .sort({ date_offer: req.body.order })
    .then((err) => {
      if (err) {
        res.send(err);
      }
    });

  return res.json(appValues);
};
