const db = require("../database/connect");

class Diary {
  constructor({ id, date, time, category, text }) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.category = category;
    this.text = text;
  }

  static async createEntry(category, text) {
    const response = await db.query(
      "INSERT INTO diary (category, text) VALUES($1, $2) RETURNING *;",
      [category, text],
    );
    if (response.rows.length != 1) {
      throw new Error(`Can't post the diary entry`);
    }
    return response.rows[0];
  }
}

module.exports = Diary;
