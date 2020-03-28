const express = require("express");

const OngControler = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);

routes.get("/ongs", OngControler.index);

routes.post("/ongs", OngControler.store);

routes.get("/incidents", IncidentController.index);

routes.post("/incidents", IncidentController.store);

routes.delete("/incidents/:id", IncidentController.destroy);

routes.get("/profile", ProfileController.index);

module.exports = routes;
