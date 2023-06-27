import mongoose from "mongoose";

const EventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    formopendate:{
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    timefrom: {
      type: String,
      required: true,
    },
    timeend: {
      type: String,
      required: true,
    },
    image:{
      type: String,
    },
    googleform:{
      type: String,
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventSchema);

export default Event;
