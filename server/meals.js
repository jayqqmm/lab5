const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

const mealSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  path: String,
  title: String,
  comment: String,
  created: {
    type: Date,
    default: Date.now
  },
});
const Meal = mongoose.model('meal', mealSchema);

router.post("/", auth.verifyToken, User.verify, async (req, res) => {
  // check parameters
   console.log(req.body);
   console.log(req.user); 
    const meal = new Meal({
    user: req.user,
    path: req.body.picture,
    comment: req.body.saveInf,
    title: req.body.mealName,
  });
  try {
    await meal.save();
    console.log('OK');
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});



router.get("/", auth.verifyToken, User.verify, async (req, res) => {
  // return photos
  try {
    let meal = await Meal.find({
      user: req.user
    }).sort({
      created: -1
    });
    return res.send(meal);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let photos = await Photo.findOne({
      _id: req.body.id,

    }).populate('users');
    return res.send(photos);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.put("/:id",(req, res) => {
    let id = req.params.id;
    Meal.findOneAndUpdate({_id: id},
    {$set: {"title":req.body.title,"comment":req.body.comment}},{returnNewDocument : true},
    function(err, doc){
    if(err){
    res.sendStatus(500);
    }
    console.log(doc);
});
});

router.delete("/:id", async (req, res) =>{
    let id = req.params.id;
    Meal.findOneAndDelete({_id: id}, function(err)
{
    if(!err){
        console.log("Deleted");
    }
});
    res.sendStatus(500);
});

module.exports = {
  model: Meal,
  routes: router,
}

