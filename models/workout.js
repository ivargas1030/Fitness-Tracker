const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: { type: Date, default: Date.now },
  exercises: [
    {
      type: {
        type: String
      },
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
});

const Workout = mongoose.model("workout", WorkoutSchema);
module.exports = Workout;
