"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const users_1 = require("../data/users");
// Get all users
const getAllUsers = (req, res) => {
    res.json(users_1.users);
};
exports.getAllUsers = getAllUsers;
// Get a user by ID
const getUserById = (req, res) => {
    const { id } = req.params;
    const user = users_1.users.find((u) => u.id === Number(id));
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.json(user);
};
exports.getUserById = getUserById;
// Create a new user
const createUser = (req, res) => {
    const newUser = Object.assign({ id: users_1.users.length + 1 }, req.body);
    users_1.users.push(newUser);
    res.status(201).json(newUser);
};
exports.createUser = createUser;
// Update an existing user
const updateUser = (req, res) => {
    const { id } = req.params;
    const index = users_1.users.findIndex((u) => u.id === Number(id));
    if (index === -1) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    users_1.users[index] = Object.assign(Object.assign({}, users_1.users[index]), req.body);
    res.json(users_1.users[index]);
};
exports.updateUser = updateUser;
// Delete a user
const deleteUser = (req, res) => {
    const { id } = req.params;
    const index = users_1.users.findIndex((u) => u.id === Number(id));
    if (index === -1) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    const deletedUser = users_1.users.splice(index, 1);
    res.json(deletedUser[0]);
};
exports.deleteUser = deleteUser;
