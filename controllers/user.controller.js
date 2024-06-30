import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export async function create(req, res) {
  try {
    const newUserDetails = req.body;
    const newUser = await User.create(newUserDetails);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

export async function signIn(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

