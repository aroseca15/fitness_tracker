const routes = require("express").Router();
const db = require("../models/models.js");
routes.get("/api/workouts", (req, res)=>{
    db.find()
    .then(records => {
        console.log("Find",records)
        res.json(records)
    })
});

routes.put("/api/workouts/:id", (req, res)=>{
    db.findByIdAndUpdate(req.params.id, 
     {$push:{excercise:req.body}}   ,
     {new:true} )
    .then(records => {
        console.log("Updated",records)
        res.json(records)
    })
});

routes.post("/api/workouts", (req, res)=>{
    db.create({})
    .then(records => {
        console.log("Created",records)
        res.json(records)
    }).catch(error=>{
        console.log(error)
    })
});

routes.get("/api/workouts/range", (req, res)=>{
    db.find({}).limit(15)
    .then(records => {
        console.log("Range",records)
        res.json(records)
    })
});

module.exports = routes;