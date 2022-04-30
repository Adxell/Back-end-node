import User from "../models/user";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, document, roles } = req.body;
    const newUser = new User({
      username,
      email,
      password: await User.encryptData(password),
      document: await User.encryptData(document),
      roles,
    });
    const userSave = await newUser.save();
    res.status(201).json(userSave);
  } catch (erro) {
    console.error(erro);
    res.status(400).json({ message: erro });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.body.id, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error" });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const responseDelete = await User.findByIdAndDelete(req.body.id);
    res.status(200).json(responseDelete);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (e) {
    console.log("Error", e);
    res.status(400).json({ message: "Error" });
  }
};
