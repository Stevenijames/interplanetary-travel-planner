const moment = require("moment");
const modelController = require("./modelController");
const db = require("../models");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  signup: function (req, res) {
    // if user is logged in, redirect to /dashboard
    if (req.user) {
      req.flash("successMsg", "You're already logged in");
      return res.redirect("/dashboard");
    }

    res.render("signup");
  },
  login: function (req, res) {
    // if user is logged in, redirect to /dashboard
    if (req.user) {
      req.flash("successMsg", "You're already logged in");
      return res.redirect("/dashboard");
    }

    res.render("login");
  },
  dashboard: function (req, res) {
    db.Flight.findAll({
      where: { UserId: Number(req.user.id) },
      include: [db.Planet, db.User, db.Rocket, db.Amenity]
    }).then(data => {
      console.log(typeof data);
      res.render("dashboard", { flights: data });
    }).catch(err => console.log(err));

    // res.render("dashboard", {
    //   email: req.user.email,
    //   user: JSON.stringify(req.user, null, 2)
    // });
  },
  expedition: async function (req, res) {
    const inProgress = await db.FlightInProgress.findOne({
      where: { UserId: req.user.id },
      include: [db.Planet, db.User, { model: db.Rocket, include: db.Company }, db.Amenity]
    });
    console.log(inProgress);
    if (!inProgress) {
      // Nothing -> Planet
      console.log("1st block");
      res.render("expedition/choose-planet", {});
      return;
    } else if (!inProgress.dataValues.PlanetId) {
      // Something (but no Planet) -> Planet
      console.log("2nd block");
      res.render("expedition/choose-planet", {});
    } else if (inProgress.dataValues.PlanetId && !inProgress.dataValues.RocketId) {
      // Planet (but no Rocket) -> Rocket
      console.log("3rd block");
      res.render("expedition/choose-rocket", {});
    } else if (inProgress.dataValues.PlanetId && inProgress.dataValues.RocketId && inProgress.dataValues.Amenities.length === 0) {
      // Planet and Rocket (but no Amenities) -> Amenities
      console.log("4th block");
      res.render("expedition/choose-amenities", {});
    } else if (inProgress.dataValues.PlanetId && inProgress.dataValues.RocketId && inProgress.dataValues.Amenities.length > 0 && !inProgress.dataValues.timestamp) {
      // Planet and Rocket and Amenities (but no Timestamp) -> Timestamp
      console.log("5th block");
      res.render("expedition/choose-timestamp", {});
    } else if (inProgress.dataValues.PlanetId && inProgress.dataValues.RocketId && inProgress.dataValues.Amenities.length > 0 && inProgress.dataValues.timestamp) {
      // Planet and Rocket and Amenities and Timestamp -> Add to main db
      console.log("5th block");

      const massagedData = {
        arrivalTimeEst: moment(inProgress.dataValues.timestamp, "YYYY-MM-DD HH:mm:ss").add(getRandomInt(21), "hours").add(getRandomInt(60), "minutes").add(getRandomInt(60), "seconds").format("YYYY-MM-DD HH:mm:ss"), //!w
        totalCost: getRandomInt(99999999999999), //!w
        flightNumber: inProgress.dataValues.Planet.dataValues.name.slice(0, 3).toUpperCase() + getRandomInt(1000),
        timestamp: inProgress.dataValues.timestamp,
        PlanetId: inProgress.dataValues.PlanetId,
        UserId: inProgress.dataValues.UserId,
        RocketId: inProgress.dataValues.RocketId
      };

      await db.Flight.create(massagedData);
      await db.FlightInProgress.destroy({
        where: {
          id: inProgress.dataValues.id
        }
      });

      res.render("expedition/success", {});
    }
  },
  logout: function (req, res) {
    req.logout();
    req.flash("successMsg", "You successfully logged out");
    res.redirect("/dashboard");
  }
};