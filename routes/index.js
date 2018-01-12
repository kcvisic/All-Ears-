const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/auth");
const apiRoutes = require("./api/api-routes");

router.use("/auth", authRoutes);
router.use("/api" , apiRoutes);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
module.exports = router;
