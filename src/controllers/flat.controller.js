
const express = require("express");
const router = express.Router();
const {Block,Resident,Flat} = require("../models/residents.model");

router.get("", async (req, res) => {
  try {
    const flat = await Flat.find().populate({path:"resedent_id",select:"name"}).populate({path:"block_id",select:"block"}).lean().exec();

    return res.send(flat);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.post("", async (req, res) => {
  try {
    const flat = await Flat.create(req.body);

    return res.send(flat);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const flat = await Flat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send(flat);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const flat = await Flat.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(flat);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
module.exports = router;
