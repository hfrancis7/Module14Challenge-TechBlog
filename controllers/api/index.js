const router = require('express').Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
//commentRoutes

router.use("/users", userRoutes);
router.use("posts", postRoutes);
//commentRoutes

module.exports = router;