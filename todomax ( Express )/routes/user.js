const express = require("express");
const userModel = require("../models/user");

const router = express.Router();

router.get("/:_id", async (req, res) => {
  try {
    const data = await userModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("", async (req, res) => {
  const data = new userModel({
    isThemeDark: req.body.isThemeDark,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    auth: {
      email: req.body.email,
      password: req.body.password,
    },
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

module.exports = router;
