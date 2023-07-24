import express from "express";
import {
  addHackathon,
  enrollInHackathon,
  getAllEmployee,
  getAllHackathons,
  getHostedHackathon,
} from "../Controller/hackathonController.js";

const route = express.Router();

route.get("/employee/all", async (req, res) => {
  await getAllEmployee(req, res);
});

route.get("/all", async (req, res) => {
  await getAllHackathons(req, res);
});

route.post("/add", async (req, res) => {
  await addHackathon(req, res);
});

route.post("/enroll", async (req, res) => {
  await enrollInHackathon(req, res);
});

route.get("/hosted/organizer/:orgId", async (req, res) => {
  await getHostedHackathon(req, res);
});

export default route;
