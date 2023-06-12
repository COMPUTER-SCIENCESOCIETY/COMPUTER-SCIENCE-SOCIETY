import mongoose from "mongoose";

const TechnicalSchema = mongoose.Schema(
  {
    NO:{
        type: Number,
    },
    NAME: {
      type: String,
      required: true,
    },
    YEAR: {
      type: String,
      required: true,
    },
    POST: {
      type: String,
      required: true,
    },
    image:{
        type: String,
        required: true,
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
  },
  {
    timestamps: true,
  }
);


const techincalmembers = mongoose.model("techincalmembers", TechnicalSchema);

export default techincalmembers;
