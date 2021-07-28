import fs from "fs";
import mongoose from "mongoose";
import { UserSchema } from "./models/userModel.js";
import { appSchema } from "./models/appModal.js";

const User = mongoose.model("User", UserSchema);
const App = mongoose.model("App", appSchema);

import bcrypt from "bcrypt";

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/projectAlpha", {
  useMongoClient: true,
});

const UsersData = JSON.parse(
  fs.readFileSync(new URL("./_data/Users.json", import.meta.url))
);

const JobAppsData = JSON.parse(
  fs.readFileSync(new URL("./_data/JobApps.json", import.meta.url))
);
const importData = async () => {
  try {
    // Create user data
    // NOTE: This is customized to only take in one user from User.json
    UsersData[0].hashPassword = bcrypt.hashSync(UsersData[0].password, 10);
    await User.create(UsersData);
    // Create job apps
    await App.create(JobAppsData);
    console.log("Data Successfully Imported");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await App.deleteMany();
    console.log("Data Successfully Deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") importData();
if (process.argv[2] === "-d") deleteData();
