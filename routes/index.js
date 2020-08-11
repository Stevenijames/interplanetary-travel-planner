var router = require("express").Router();
var passport = require("passport");
var isLoggedIn = require("../config/middleware/isLoggedIn");
var authController = require("../controllers/authController.js");
var apiRoutes = require("./api");
const isInProgress = require("../config/middleware/isInProgress");

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

module.exports = router;