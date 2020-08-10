const { route } = require("..");
const router = require("express").Router();
const db = require("../../models");
const { findAmenities, findPlanets, findRockets, findFlights } = require("../../controllers/modelQueries");
// require your site-specific route files here...
// var bookRoutes = require("./books");

// then wire up 'router.use' middleware to create a batch of related routes; remember that, in the example
// below, all routes that start with '/api/books' would be passed over into the bookRoutes JS
// router.use("/books", bookRoutes);

// router.use("/api/rockets", (req, res) => {
//   req.body;
//   db.Rocket.findAll({
//     where: {}
//   })
// })

router.get("/rockets", findRockets);
router.get("/planets", findPlanets);
router.get("/amenities", findAmenities);
router.get("/flights/:id", findFlights);

module.exports = router;