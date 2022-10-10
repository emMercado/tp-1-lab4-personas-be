import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import { db } from './db.js';
import { personaRoute } from './routers/personas.routes.js';

const app = express();
app.use(express.json());

//Routes
app.use("/personas/", personaRoute);

//Welcome
app.get("/", (req, res) => {
  res.send("API de personas");
});


// API execution
app.listen(3001, async () => {
  try {
    await db.authenticate();
    console.log("Connect to db");
  } catch (error) {
    console.error("Fail connect to db", error);
  }
});
