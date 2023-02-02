const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
      type: String,
      required: "title is required"
    },
    level: String,
    ingredients: [String],
    cuisine:  {
      type: String,
      required: "cuisine is required"
    },
    dishType: String,
    image: String,
    duration: Number,
    creator: String,
    created: Date,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
