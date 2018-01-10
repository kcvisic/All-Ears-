const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/auth");

router.use("/auth", authRoutes);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
module.exports = router;
