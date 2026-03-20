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
  
  static async getAll() {
    const response = await db.query(
      "SELECT * FROM diary;",
    )
    if (response.rows.length === 0) {
      throw new Error(`Can't find any entries`)
    }
    return response.rows;
  }

  static async update(text) {
    const response = await db.query(
      "UPDATE diary SET text = "
    )
  }
}

module.exports = Diary;
