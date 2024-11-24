import { Router } from "express";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/userController";

const router = Router();

router.get("/", getAllUsers);         // GET all users
router.get("/:id", getUserById);      // GET user by ID
router.post("/", createUser);         // CREATE a new user
router.put("/:id", updateUser);       // UPDATE a user
router.delete("/:id", deleteUser);    // DELETE a user

export default router;
