
const express = require("express");
const router = express.Router();
const {Block,Resident,Flat} = require("../models/residents.model");
router.get("/:id", async (req, res) => {
  try {
    
    const resident = await Resident.findById(req.params.id).lean().exec();

    return res.send(resident);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("", async (req, res) => {
  try {
    const resident = await Resident.find().lean().exec();

    return res.send(resident);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.post("", async (req, res) => {
  try {
    const resident = await Resident.create(req.body);

    return res.send(resident);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const resident = await Resident.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send(resident);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const resident = await Resident.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(resident);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
module.exports = router;
