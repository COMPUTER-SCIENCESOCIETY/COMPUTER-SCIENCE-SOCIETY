import eventcodinator from "../models/EventCodinatorModel.js";
import techincalmembers from "../models/TechnicalModel.js";
import creatativemembers from "../models/creatativeModel.js";
import headsoceity from "../models/headsociety.js";
import sponsers from "../models/sponserModel.js";
import sportmembers from "../models/sportModel.js";

const getHeadUser = async (req, res) => {
  headsoceity
    .find()
    .populate("postedBy", "name")
    .sort({ createdAt: -1 })
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getallposts = async (req, res) => {
  creatativemembers
    .find()
    .populate("postedBy", "name")
    .sort({ createdAt: -1 })
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getEventCodSch = async (req, res) => {
  eventcodinator
    .find()
    .populate("postedBy", "name")
    .sort({ createdAt: -1 })
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getTechnicalUser = async (req, res) => {
  techincalmembers
    .find()
    .populate("postedBy", "name")
    .sort({ createdAt: -1 })
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSponserUser = async (req, res) => {
  sponsers
    .find()
    .populate("postedBy", "name")
    .sort({ createdAt: -1 })
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSportUser = async (req, res) => {
  sportmembers
    .find()
    .populate("postedBy", "name")
    .sort({ createdAt: -1 })
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
};

const headUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await headsoceity.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

const creativeUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await creatativemembers.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

const eventCodinatorUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await eventcodinator.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

const TechnicalUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await techincalmembers.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

const sponserUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await sponsers.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

const sportUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await sportmembers.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

export {
  getHeadUser,
  getallposts,
  getEventCodSch,
  getTechnicalUser,
  getSponserUser,
  getSportUser,
  headUpdate,
  creativeUpdate,
  eventCodinatorUpdate,
  TechnicalUpdate,
  sponserUpdate,
  sportUpdate,
};
