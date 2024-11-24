import { Request, Response } from "express";
import { users } from "../data/users";
import { User } from "../models/userModel";

// Get all users
export const getAllUsers = (req: Request, res: Response): void => {
    res.json(users);
};

// Get a user by ID
export const getUserById = (req: Request, res: Response): void => {
    const { id } = req.params;
    const user = users.find((u) => u.id === Number(id));

    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    res.json(user);
};

// Create a new user
export const createUser = (req: Request, res: Response): void => {
    const newUser: User = {
        id: users.length + 1, // Simple auto-increment logic
        ...req.body,
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

// Update an existing user
export const updateUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    const index = users.findIndex((u) => u.id === Number(id));

    if (index === -1) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
};

// Delete a user
export const deleteUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    const index = users.findIndex((u) => u.id === Number(id));

    if (index === -1) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
};
