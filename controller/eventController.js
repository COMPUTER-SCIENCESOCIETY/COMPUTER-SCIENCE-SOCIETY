import Event from "../models/EventModel.js";

const createEvent = async (req, res) => {

  try {
    const { title, date,formopendate, month,image,googleform, timefrom, timeend } = req.body;
    if (!title || !date || !month || !googleform) {
      return res.status(402).json({ error: "Plz add all the fields" });
    }

    const event = new Event({
      title,
      date,
      formopendate,
      month,
      timefrom,
      timeend,
      image,
      googleform,
      postedBy:req.user.id
    });
    event.save()
      .then((events) => {
        res.json({ event: events });
      })
      .catch((error) => console.log(error));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getallEvent = async (req, res) => {
  Event.find()
    .sort({ createdAt: -1 })
    .then((events) => {
      res.json({ events });
    })
    .catch((err) => {
      console.log(err);
    });
}



export { createEvent,getallEvent };
