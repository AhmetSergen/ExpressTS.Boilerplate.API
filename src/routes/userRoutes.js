"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get("/", userController_1.getAllUsers); // GET all users
router.get("/:id", userController_1.getUserById); // GET user by ID
router.post("/", userController_1.createUser); // CREATE a new user
router.put("/:id", userController_1.updateUser); // UPDATE a user
router.delete("/:id", userController_1.deleteUser); // DELETE a user
exports.default = router;
