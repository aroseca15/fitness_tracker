const routes = require("express").Router();
const db = require("../models/models");
routes.get("/api/workouts", (req, res)=>{
    db.find()
    .then(records => {
        console.log("Find",records)
        res.json(records)
    })
});

routes.put("/api/workouts/:id", (req, res)=>{
    db.findByIdAndUpdate(req.params.id, 
     {$push:{exercise:req.body}}   ,
     {new:true} )
    .then(records => {
        console.log("Updated",records)
        res.json(records)
    })
});

routes.post("/api/workouts", (req, res)=>{
    db.create(req.body)
    .then(records => {
        console.log("Created",records)
        res.json(records)
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