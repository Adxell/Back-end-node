import Class from "../models/Class";

export const getClassAdmin = async (req, res) => {
  try {
    const getclass = await Class.find();
    res.json(getclass);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "error" });
  }
};

export const getClassByIdAdmin = async (req, res) => {
  try {
    const class1 = await Class.findById(req.params.classid);
    res.status(200).json(class1);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const updateClassByIdAdmin = async (req, res) => {
  try {
    const _id = req.params.classid;
    const name = req.body.name;
    const time = req.body.time;
    const description = req.body.description;
    const updateClass = await Class.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: name,
          time: time,
          description: description,
        },
      },
      { new: true }
    );
    res.status(200).json(updateClass);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const deleteClassByIdAdmin = async (req, res) => {
  try {
    const responseDelete = await Class.findByIdAndDelete(req.params.classid);
    res.status(200).json(responseDelete);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err });
  }
};
