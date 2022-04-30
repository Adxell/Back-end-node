import User from "../models/user";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

export const singUp = async (req, res) => {
  try {
    const { username, email, password, document, roles } = req.body;
    const newUser = new User({
      username,
      email,
      password: await User.encryptData(password),
      document: await User.encryptData(document),
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      console.log(foundRoles);
      console.log(roles);
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }
    const saveUser = await newUser.save();

    console.log(saveUser);
    const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
      expiresIn: 86400,
    });
    res.status(200).json({ token }).redirect(`/`);
  } catch (err) {
    console.error(err);
    res.status(400),json({message: err})
  }
};
export const singIn = async (req, res) => {
  try {
    const userFound = await User.findOne({ email: req.body.email }).populate(
      "roles"
    );
    const rolesA = [];
    userFound.roles.forEach((element) => {
      rolesA.push(element.name);
    });
    const userId = userFound._id;
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );
    if (!matchPassword) return res.status(401).json({ token: null, message: "Invalid password" });
    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400,
    });
    res.json({ token, rolesA, userId });
  } catch (err) {
    console.error(err);
    res.status(401).json({ token: null, message: "Invalid password" });
  }
};
