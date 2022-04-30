import Report from "../models/Report";
import Class from "../models/Class";
import mongoose from "mongoose";

export const createReport = async (req, res) => {
  try {
    const idClas = req.params.classid;
    const description = req.body.description;
    const idClass = mongoose.Types.ObjectId(idClas);
    const newReport = new Report({ description, idClass });
    const saveData = await newReport.save();
    res.status(200).json({ saveData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

export const getReport = async (req, res) => {
  try {
    const idClass = req.params.classid;
    const dataReport = await Report.find({ idClass });
    res.status(200).json(dataReport);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

