const db = require("../models");

const findAmenities = (req, res) => {
  const amenitiesInfo = db.Amenity.findAll();
  res.json(amenitiesInfo);
};

const findPlanets = (req, res) => {
  const planetData = db.Planet.findAll();
  res.json(planetData);
};

const findRockets = (req, res) => {
  const rocketInfo = db.Rocket.findAll();
  res.json(rocketInfo);
};

module.exports = { findAmenities, findPlanets, findRockets };