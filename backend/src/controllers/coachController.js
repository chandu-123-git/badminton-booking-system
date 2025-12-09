const coachModel = require("../models/coachModel");

exports.getAllCoaches = async (req, res) => {
  const [rows] = await coachModel.getAllCoaches();
  res.json(rows);
};

exports.addCoach = async (req, res) => {
  await coachModel.addCoach(req.body);
  res.json({ message: "Coach added" });
};

exports.updateCoach = async (req, res) => {
  const { id } = req.params;
  await coachModel.updateCoach(id, req.body);
  res.json({ message: "Coach updated" });
};

exports.deleteCoach = async (req, res) => {
  const { id } = req.params;
  await coachModel.deleteCoach(id);
  res.json({ message: "Coach removed" });
};
