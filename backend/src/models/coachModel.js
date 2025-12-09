const db = require("../config/db");

module.exports = {
  getAllCoaches() {
    return db.query("SELECT * FROM coaches");
  },

  addCoach(data) {
    return db.query(
      "INSERT INTO coaches (name, specialty, available) VALUES (?, ?, ?)",
      [data.name, data.specialty, data.available]
    );
  },

  updateCoach(id, data) {
    return db.query(
      "UPDATE coaches SET name=?, specialty=?, available=? WHERE id=?",
      [data.name, data.specialty, data.available, id]
    );
  },

  deleteCoach(id) {
    return db.query("DELETE FROM coaches WHERE id=?", [id]);
  },
};
