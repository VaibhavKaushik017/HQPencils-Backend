import express from "express";
import { deleteUser, getAllUsers, getUser, newUser, } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";
const app = express.Router();
// Route - /api/v1/user/new
app.post("/new", newUser);
// Route - /api/v1/user/all
app.get("/all", adminOnly, getAllUsers);
// Both routes are same so we are using chaining method here
// // Route - /api/v1/user/DynamicID
// app.get("/:id", getUser);
// // Route - /api/v1/user/DynamicID
// app.delete("/:id", deleteUser);
app.route("/:id").get(getUser).delete(adminOnly, deleteUser);
export default app;
