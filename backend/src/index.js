import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import { configDotenv } from "dotenv";
import { GuideSchema, TouristSchema } from "./database.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

configDotenv();

const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

let startTime = Date.now();
/** @type {mongoose.Connection} */
let mongoConn;
let Tourist;
let Guide;

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Access denied" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};
app.get("/debug", (req, res) => {
  res.send({
    init: startTime,
    uptime: Date.now() - startTime,
  });
});

app.post("/register/tourist", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Missing fields");

    const hashedPassword = await bcrypt.hash(password, 10);

    const tourist = new Tourist({ ...req.body, password: hashedPassword });
    tourist.validate((err) => {
      if (err) {
        res.status(400).send("Invalid form data");
        return;
      }
    });
    await tourist.save();

    res.status(201).send("Tourist registered successfully");
  } catch (error) {
    res.status(500).send("Error registering tourist");
  }
});

app.post("/register/guide", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Missing fields");

    const hashedPassword = await bcrypt.hash(password, 10);
    const guide = new Guide({ ...req.body, password: hashedPassword });
    guide.validate((err) => {
      if (err) {
        res.status(400).send("Invalid form data");
        return;
      }
    });
    await guide.save();

    res.status(201).send("Guide registered successfully");
  } catch (error) {
    res.status(500).send("Error registering guide");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role)
      return res.status(400).send("Missing fields");

    const User = role === "tourist" ? Tourist : Guide;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role },
      JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.json({ token });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get("/tourists/:email", authenticateToken, async (req, res) => {
  try {
    const tourist = await Tourist.findOne({ email: req.params.email }).select(
      "-password",
    );
    if (!tourist) return res.status(404).send("Tourist not found");

    res.json(tourist);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get("/guides/:email", authenticateToken, async (req, res) => {
  try {
    const guide = await Guide.findOne({ email: req.params.email }).select(
      "-password",
    );
    if (!guide) return res.status(404).send("Guide not found");

    res.json(guide);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

const main = async () => {
  const connUrl =
    process.env.MONGODB_URI || "mongodb://localhost:27017/meraguide";
  mongoConn = await mongoose.connect(connUrl);
  Tourist = mongoConn.model("Tourist", TouristSchema);
  Guide = mongoConn.model("Guide", GuideSchema);

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening to http://localhost:${process.env.PORT || 3000}`);
  });
};

main();
