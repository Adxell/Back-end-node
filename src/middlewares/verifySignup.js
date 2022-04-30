import Roles from "../models/Role";

export const checkRolesExisted = async (req, res, next) => {
  try {
    const foundRoles = await Roles.find({ name: { $in: req.body.roles } });
    for(let i=0; i<req.body.roles.length; i++){
        if (req.body.roles.includes(foundRoles[i].name)) {
          return res.status(200).json({ message: "role does exist" });
        }
    }
    
    return res.status(400).json({ message: "role does not exists" });
  } catch (err) {
    res.status(404).json({ message: "role does not exists" });
  }
};

