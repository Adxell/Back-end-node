import Report from "../models/Report";

export const deleteReport = async (req, res) => {
  try {
    const idReport = req.params.reportid;
    console.log(idReport);
    const dataReport = await Report.findOneAndDelete({ idReport });
    res.status(200).json(dataReport);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error" });
  }
};
