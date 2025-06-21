const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const Validation = require("../middleware/validate");
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/",Validation, userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
