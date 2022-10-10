import express from "express";
import {
  deletePerson,
  getPersonById,
  getPersons,
  registerPerson,
  updatePerson,
} from "../controllers/persona.controller.js";

export const personaRoute = express.Router();

// GET /Personas
personaRoute.get("/", (req, res) => getPersons(req, res));
// GET /Personas/:id
personaRoute.get("/:id", (req, res) => getPersonById(req, res));
// POST /Personas
personaRoute.post("/registerPerson", (req, res) => registerPerson(req, res));
// PUT /Personas/:id
personaRoute.put("/:id", (req, res) => updatePerson(req, res));
// DELETE /Personas/:id
personaRoute.delete("/:id", (req, res) => deletePerson(req, res));