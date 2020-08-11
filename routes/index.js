var router = require("express").Router();
var passport = require("passport");
var isLoggedIn = require("../config/middleware/isLoggedIn");
var authController = require("../controllers/authController.js");
var apiRoutes = require("./api");
const isInProgress = require("../config/middleware/isInProgress");
const db = require("../models");

router.get("/", function (req, res) {
  res.render("index");
});

// API routes (add files/routes within '/api' to run CRUD operations against your
// database and to query external APIs)...
router.use("/api", apiRoutes);

// auth routes
router.get("/signup", authController.signup);
router.get("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/dashboard", isLoggedIn, authController.dashboard);
router.get("/expedition", isLoggedIn, isInProgress, authController.expedition);

router.post("/signup", passport.authenticate("local-signup", {
  successRedirect: "/dashboard",
  failureRedirect: "/signup",
  failureFlash: true
}));

router.post("/login", passport.authenticate("local-login", {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
  failureFlash: true
}));

router.post("/api/add/planet", async (req, res) => {
  // if no row exists for the user create one
  if (!await db.FlightInProgress.findOne({ where: { UserId: req.user.id } })) await db.FlightInProgress.create({ UserId: req.user.id });
  // get the planet passed to get the id
  const planetSequelize = await db.Planet.findOne({ where: { name: req.body.planet } });
  // assign id to parsedPlanetId
  const parsedPlanetId = planetSequelize.dataValues.id;
  // update the object
  await db.FlightInProgress.update({ PlanetId: parsedPlanetId }, { where: { UserId: req.user.id } });
  res.redirect("/expedition");
});

router.post("/api/add/rocket", async (req, res) => {
  // get the rocket passed to get the id
  const rocketSequelize = await db.Rocket.findOne({ where: { name: req.body.rocket } });
  // assign id to parsedRocketId
  const parsedRocketId = rocketSequelize.dataValues.id;
  // update the object
  await db.FlightInProgress.update({ RocketId: parsedRocketId }, { where: { UserId: req.user.id } });
  res.redirect("/expedition");
});

router.post("/api/add/amenities", async (req, res) => {
  //!!!
  // get the planet passed to get the id
  const rocketSequelize = await db.Rocket.findOne({ where: { name: req.body.rocket } });
  // assign id to parsedPlanetId
  const parsedRocketId = rocketSequelize.dataValues.id;
  // update the object
  await db.FlightInProgress.update({ RocketId: parsedRocketId }, { where: { UserId: req.user.id } });
  res.redirect("/expedition");
});

router.post("/api/add/timestamp", async (req, res) => {
  //!!!
  // get the planet passed to get the id
  const rocketSequelize = await db.Rocket.findOne({ where: { name: req.body.rocket } });
  // assign id to parsedPlanetId
  const parsedRocketId = rocketSequelize.dataValues.id;
  // update the object
  await db.FlightInProgress.update({ RocketId: parsedRocketId }, { where: { UserId: req.user.id } });
  res.redirect("/expedition");
});





module.exports = router;