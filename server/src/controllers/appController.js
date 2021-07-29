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

  return res.json({ success: true, data: appValues });
};

export const countStatus = async (req, res) => {
  const appValues = await App.find({ userId: req.user._id }, (err, app) => {
    if (err) {
      res.send(err);
    }
  });

  const values = {};

  const status = ["applied", "interviews", "accepted", "declined", "ghosted"];
  status.forEach((item) => {
    values[item] = 0;
  });

  appValues.forEach((item) => {
    if (item["_doc"]["status"] == "applied") {
      values["applied"] += 1;
    }
    if (item["_doc"]["status"] == "interviewing") {
      values["interviews"] += 1;
    }
    if (item["_doc"]["status"] == "accepted") {
      values["accepted"] += 1;
    }
    if (item["_doc"]["status"] == "declined") {
      values["declined"] += 1;
    }
    if (item["_doc"]["status"] == "ghosted") {
      values["ghosted"] += 1;
    }
  });
  return res.json(values);
};

export const countCompanyStatus = async (req, res) => {
  const appValues = await App.find(
    { company: req.body.company },
    (err, app) => {
      if (err) {
        res.send(err);
      }
    }
  );

  const values = {};

  const status = ["applied", "interviews", "accepted", "declined", "ghosted"];
  status.forEach((item) => {
    values[item] = 0;
  });

  appValues.forEach((item) => {
    if (item["_doc"]["status"] == "applied") {
      values["applied"] += 1;
    }
    if (item["_doc"]["status"] == "interviewing") {
      values["interviews"] += 1;
    }
    if (item["_doc"]["status"] == "accepted") {
      values["accepted"] += 1;
    }
    if (item["_doc"]["status"] == "declined") {
      values["declined"] += 1;
    }
    if (item["_doc"]["status"] == "ghosted") {
      values["ghosted"] += 1;
    }
  });
  return res.json(values);
};

export const countCompanyStatusUser = async (req, res) => {
  const appValues = await App.find(
    { userId: req.user._id, company: req.body.company },
    (err, app) => {
      if (err) {
        res.send(err);
      }
    }
  );

  const values = {};

  const status = ["applied", "interviews", "accepted", "declined", "ghosted"];
  status.forEach((item) => {
    values[item] = 0;
  });

  appValues.forEach((item) => {
    if (item["_doc"]["status"] == "applied") {
      values["applied"] += 1;
    }
    if (item["_doc"]["status"] == "interviewing") {
      values["interviews"] += 1;
    }
    if (item["_doc"]["status"] == "accepted") {
      values["accepted"] += 1;
    }
    if (item["_doc"]["status"] == "declined") {
      values["declined"] += 1;
    }
    if (item["_doc"]["status"] == "ghosted") {
      values["ghosted"] += 1;
    }
  });
  return res.json(values);
};

export const search = async (req, res) => {
  const searchValues = await App.find(
    { userId: req.user._id, company: req.body.searchString },
    (err, app) => {
      if (err) {
        res.send(err);
      }
    }
  );

  if (searchValues.length > 0) {
    return res.json(searchValues);
  } else {
    const searchValues1 = await App.find(
      { userId: req.user._id, jobTitle: req.body.searchString },
      (err, app) => {
        if (err) {
          res.send(err);
        }
      }
    );

    if (searchValues1.length > 0) {
      return res.json(searchValues1);
    } else {
      //Is this a good message?
      return res.json({ message: "Your search did not get any results" });
    }
  }
};

export const heardBackJobTitle = async (req, res) => {
  const responses = {};
  const appValues = await App.find({ userId: req.user._id }, (err, app) => {
    if (err) {
      res.send(err);
    }
  });
  appValues.forEach((item) => {
    if (
      item["_doc"]["status"] == "interviewing" ||
      item["_doc"]["status"] == "accepted"
    ) {
      if (item["_doc"]["jobTitle"] in responses) {
        responses[item["_doc"]["jobTitle"]] += 1;
      } else {
        responses[item["_doc"]["jobTitle"]] = 1;
      }
    }
  });

  return res.json(responses);
};

export const heardBackCompany = async (req, res) => {
  const responses = {};
  const appValues = await App.find({ userId: req.user._id }, (err, app) => {
    if (err) {
      res.send(err);
    }
  });
  appValues.forEach((item) => {
    if (
      item["_doc"]["status"] == "interviewing" ||
      item["_doc"]["status"] == "accepted"
    ) {
      if (item["_doc"]["company"] in responses) {
        responses[item["_doc"]["company"]] += 1;
      } else {
        responses[item["_doc"]["company"]] = 1;
      }
    }
  });

  return res.json(responses);
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
    return res.json({ message: "Not supported sort field" });
  }
};

export const sortByDate = async (req, res) => {
  const dateFields = req.body.dateField;
  if (dateFields == "dateOffer") {
    const appValues = await App.find({ userId: req.user._id })
      .sort({ date_offer: req.body.order })
      .then((err) => {
        if (err) {
          res.send(err);
        }
      });

    return res.json(appValues);
  } else if (dateFields == "dateInterview") {
    const appValues = await App.find({ userId: req.user._id })
      .sort({ date_interview: req.body.order })
      .then((err) => {
        if (err) {
          res.send(err);
        }
      });

    return res.json(appValues);
  } else if (dateFields == "dateAccept") {
    const appValues = await App.find({ userId: req.user._id })
      .sort({ date_accept: req.body.order })
      .then((err) => {
        if (err) {
          res.send(err);
        }
      });

    return res.json(appValues);
  } else if (dateFields == "dateApplied") {
    const appValues = await App.find({ userId: req.user._id })
      .sort({ date_applied: req.body.order })
      .then((err) => {
        if (err) {
          res.send(err);
        }
      });

    return res.json(appValues);
  } else {
    return res.json({ message: "Not supported date field" });
  }
};
