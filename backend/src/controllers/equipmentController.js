const db = require("../config/db");

exports.getAllEquipment = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM equipment");
  res.json(rows);
};

exports.addEquipment = async (req, res) => {
  const { name, quantity, price } = req.body;
  await db.query("INSERT INTO equipment (name, quantity, price) VALUES (?, ?, ?)", [name, quantity, price]);
  res.json({ message: "Equipment added" });
};

exports.updateEquipment = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, price } = req.body;
  await db.query("UPDATE equipment SET name=?, quantity=?, price=? WHERE id=?", [name, quantity, price, id]);
  res.json({ message: "Equipment updated" });
};

exports.deleteEquipment = async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM equipment WHERE id=?", [id]);
  res.json({ message: "Equipment deleted" });
};
