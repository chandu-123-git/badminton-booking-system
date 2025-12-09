const courtModel = require("../models/courtModel");

exports.getCourts = async (req, res) => {
  const [rows] = await courtModel.getCourts();
  res.json(rows);
};

exports.addCourt = async (req, res) => {
  const { name, type } = req.body;
  await courtModel.addCourt({ name, type });
  res.json({ message: "Court added" });
};

exports.updateCourt = async (req, res) => {
  const { id } = req.params;
  await courtModel.updateCourt(id, req.body);
  res.json({ message: "Court updated" });
};

exports.disableCourt = async (req, res) => {
  const { id } = req.params;
  await courtModel.disableCourt(id);
  res.json({ message: "Court disabled" });
};
