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
    type: Date,
    required: false,
  },
  date_interview: {
    type: Date,
    required: false,
  },
  date_accept: {
    type: Date,
    required: false,
  },
  date_applied: {
    type: Date,
    required: false,
  },
});
