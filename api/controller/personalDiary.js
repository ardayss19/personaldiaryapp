const Diary = require("../model/Diary");

async function postEntry(req, res) {
  try {
    const category = req.body.category;
    const text = req.body.text;

    const entry = await Diary.createEntry(category, text);
    res.status(201).json({ entry });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}
async function getAll(req,res){
  try{
    const entry = await Diary.getAll();
    res.status(200).json({entry})
  }
  catch (err) {
    res.status(404).json({error: err.message})
  }
}

async function update(req,res){
  try{
    const id= parseInt(req.params.id)
    const data= req.body
    const result = await Diary.update();
    res.status(200).json({result})
  }
  catch (err) {
    res.status(404).json({error: err.message})
  }
}

module.exports = { postEntry,getAll };
