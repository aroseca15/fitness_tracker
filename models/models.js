const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter a name for Workout"
            },
            type: {
                type: String,
                required: "Enter an type of excercise"
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },

        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    
    
}, {
    // Below will assist in putting information into colums:
    toJSON: {
        virtuals: true
    }
});



workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercises)=>{
        return total + exercises.duration;
    }, 0)
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


