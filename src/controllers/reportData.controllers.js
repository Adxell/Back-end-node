import Report from "../models/Report";
import mongoose from "mongoose";

export const getReportById = async (req, res) => {
  try {
    const idReport = req.params.reportid;
    const id = mongoose.Types.ObjectId(idReport);
    const dataReport = await Report.findById(id);
    res.status(200).json(dataReport);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const deleteReport = async(req, res)=>{
  try {
    const idReport = req.params.reportid;
    const dataReport = await Report.findOneAndDelete({ idReport });
    res.status(200).json(dataReport);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
}

export const updateById = async (req, res) => {
  try {
    const _id = req.params.reportid;
    const description = req.body.description;
    const dataReport = await Report.findByIdAndUpdate(
      { _id },
      {
        $set: {
          description: description,
        },
      },
      { new: true }
    );
    res.status(200).json(dataReport);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};
