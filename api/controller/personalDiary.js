const Diary = require("../model/Diary");

async function postEntry(req, res) {
  try {
    const category = req.body.category;
    const text = float(req.body.text, 2);

    const entry = await Diary.createEntry(category, text);
    res.status(201).json({ entry });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

module.exports = { postEntry };
