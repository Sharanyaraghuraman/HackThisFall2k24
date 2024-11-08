import mongoose from "mongoose";

export const TouristSchema = mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  name: String,
  age: Number,
  bio: String,
  gender: String,
  email: String,
  phone: Number,
  ownDistrict: String,
  ownState: String,
  ownCountry: String,
});

export const GuideSchema = mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  name: String,
  age: Number,
  bio: String,
  gender: String,
  email: String,
  phone: Number,
  ownDistrict: String,
  ownState: String,
  ownCountry: String,
  tags: [String],
  rating: Number,
});
