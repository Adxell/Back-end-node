import { Schema, model } from "mongoose";

const schemaReport = Schema(
  {
    description: {
      type: String,
    },
    idClass: {
      ref:"Class",
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Report", schemaReport);
