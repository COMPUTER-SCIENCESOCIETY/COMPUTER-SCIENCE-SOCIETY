import eventcodinator from "../models/EventCodinatorModel.js";
import lensmedias from "../models/LensMediaModel.js";
import techincalmembers from "../models/TechnicalModel.js";
import creatativemembers from "../models/creatativeModel.js";
import headsoceity from "../models/headsociety.js";
import sponsers from "../models/sponserModel.js";
import sportmembers from "../models/sportModel.js";

//get all post
const getHeadUser = async (req, res) => {
  headsoceity
    .find()
    .populate("postedBy", "name")
    .sort({ createdAt: -1 })
    .then((post) => {
      res.json({ post, processId: process.pid });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getHeadUserCount = async (req, res) => {
  try {
    const headofsociety = await headsoceity.countDocuments();
    const creatativesociety = await creatativemembers.countDocuments();
    const eventCodinatorsoceity = await eventcodinator.countDocuments();
    const techincalsociety = await techincalmembers.countDocuments();
    const sponsersociety = await sponsers.countDocuments();
    const sportsociety = await sportmembers.countDocuments();
    const lensmediasociety = await lensmedias.countDocuments();

    res.status(200).json([
      {
        img: "https://api.dicebear.com/5.x/avataaars/svg?seed=king",
        img: "https://api.dicebear.com/5.x/avataaars/svg?seed=king",
        name: "CORE TEAM",
        count: headofsociety,
      },
      {
        img: "https://api.dicebear.com/5.x/avataaars/svg?seed=creative",
        name: "CREATIVE MEMBER",
        count: creatativesociety,
      },
      {
        img: "https://api.dicebear.com/5.x/avataaars/svg?seed=event",
        name: "EVENT-CODINATOR MEMBER",
        count: eventCodinatorsoceity,
      },
      {
        img: "https://api.dicebear.com/5.x/avataaars/svg?seed=technical",
        name: "TECHNICAL MEMBER",
        count: techincalsociety,
      },
      {
        img: "https://api.dicebear.com/5.x/avataaars/svg?seed=sponser",
        name: "SPONSER MEMBER",
        count: sponsersociety,
      },
      {
        img: "https://api.dicebear.com/5.x/avataaars/svg?seed=sportperson",
        name: "SPORTS MEMBER",
        count: sportsociety,
      },
      {
        img: "https://api.dicebear.com/5.x/avataaars/svg?seed=media",
        name: "LENS / MEDIA MEMBER",
        count: lensmediasociety,
      },
    ]);
  } catch (error) {
    res.status(500).json(error);
  }
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

const getLensMedia = async (req, res) => {
  lensmedias
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

//update section
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

const lensmediaUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await lensmedias.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

export {
  getHeadUser,
  getHeadUserCount,
  getallposts,
  getEventCodSch,
  getTechnicalUser,
  getSponserUser,
  getSportUser,
  getLensMedia,
  headUpdate,
  creativeUpdate,
  eventCodinatorUpdate,
  TechnicalUpdate,
  sponserUpdate,
  sportUpdate,
  lensmediaUpdate,
};
