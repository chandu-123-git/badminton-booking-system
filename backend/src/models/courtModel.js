const db = require("../config/db");

exports.getCourts = () => {
  return db.query("SELECT * FROM courts");
};

exports.addCourt = ({ name, type }) => {
  return db.query("INSERT INTO courts (name, type) VALUES (?, ?)", [name, type]);
};

exports.updateCourt = (id, { name, type }) => {
  return db.query("UPDATE courts SET name = ?, type = ? WHERE id = ?", [name, type, id]);
};

exports.disableCourt = (id) => {
  return db.query("UPDATE courts SET is_active = false WHERE id = ?", [id]);
};
