import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const appSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date_offer: {
    type: String,
    required: false,
  },
  date_interview: {
    type: String,
    required: false,
  },
  date_accept: {
    type: String,
    required: false,
  },
  date_applied: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true,
  },
});
