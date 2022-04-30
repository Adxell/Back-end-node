import Class from "../models/Class";
import Report from "../models/Report";

export const createClass = async (req, res) => {
  try {
    const { name, time, description, professor } = req.body;
    const newClass = new Class({ name, time, description, professor });
    const classSaved = await newClass.save();
    res.status(201).json(classSaved);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err });
  }
};

export const getClass = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const getclass = await Class.find({ professor: { $in: userId } });
    res.json(getclass);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const getClassById = async (req, res) => {
  try {
    const class1 = await Class.findById(req.params.classid);
    res.status(200).json(class1);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err });
  }
};

export const updateClassById = async (req, res) => {
  try {
    const updateClass = await Class.findByIdAndUpdate(
      req.params.classid,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateClass);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err });
  }
};

export const deleteClassById = async (req, res) => {
  try {
    const responseDelete = await Class.findByIdAndDelete(req.params.classid);
    res.status(200).json(responseDelete);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err });
  }
};
