import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import { configDotenv } from "dotenv";
import { GuideSchema, TouristSchema } from "./database.js";
import cors from "cors";

configDotenv();

const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

let startTime = Date.now();
/** @type {mongoose.Connection} */
let mongoConn;
let Tourist;
let Guide;

app.get("/debug", (req, res) => {
  res.send({
    init: startTime,
    uptime: Date.now() - startTime,
  });
});

app.post("/tourists", async (req, res) => {
  try {
    let tourist = new Tourist(await req.json());
    tourist.save();
    res.sendStatus(200).send("OK");
  } catch {
    res.sendStatus(400).send("Missing fields");
  }
});
app.post("/guides", async (req, res) => {
  try {
    let guide = new Guide(await req.json());
    guide.save();
    res.sendStatus(200).send("OK");
  } catch {
    res.sendStatus(400).send("Missing fields");
  }
});

app.get("/tourists/:email", (req, res) => {});
app.get("/guides/:email", (req, res) => {});

const main = async () => {
  let connUrl =
    process.env.MONGODB_URI || "mongodb://localhost:27017/meraguide";
  mongoConn = await mongoose.connect(connUrl);
  Tourist = mongoConn.model("Tourist", TouristSchema);
  Guide = mongoConn.model("Guide", GuideSchema);
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening to http://localhost:${process.env.PORT || 3000}`);
  });
};

main();
