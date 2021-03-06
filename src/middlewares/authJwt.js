import jwt from "jsonwebtoken";
import config from "../config";

import User from "../models/user";
import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x_access_token"];
    if (!token) return res.status(403).json({ message: "no token provided" });
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "no user found" });
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const isProfesor = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "profesor") {
      next();
      return;
    }
  }
  return res.status(403).json({ messaje: "Require profesor role" });
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }
  return res.status(403).json({ messaje: "Require admin role" });
};
