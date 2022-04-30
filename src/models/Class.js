import {Schema, model} from 'mongoose'

const classSchema = new Schema(
  {
    name: {
      type: String,
    },
    time: {
      type: String,
    },
    description: {
      type: String,
    },
    professor:[{
        ref:"User",
        type: Schema.Types.ObjectId
    }]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Class", classSchema);