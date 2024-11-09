import mongoose from "mongoose";

export const TouristSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bio: { type: String, default: "" },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  ownDistrict: { type: String },
  ownState: { type: String },
  ownCountry: { type: String },
  password: { type: String, required: true },
});

export const GuideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bio: { type: String, default: "" },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  ownDistrict: { type: String },
  ownState: { type: String },
  ownCountry: { type: String },
  tags: { type: [String], default: [] },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  password: { type: String, required: true },
});
