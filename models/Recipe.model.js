const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
      type: String,
      required: "title is required"
    },
    level: {
      type: String,
      enum: ["Easy Peasy", "Amateur", "Chef", "UltraPro Chaef"]
    },
    ingredients: [String],
    cuisine:  {
      type: String,
      required: "cuisine is required"
    },
    dishType: {
      type: String,
      enum: ["breakfast", "main_course", "soup", "snack", "drink", "dessert", "other"]
    },
    image:  {
      type: String,
      default: "https://images.media-allrecipes.com/images/75131.jpg"
    },
    duration:  {
      type: Number,
      MinValue: 0,
    },
    creator: {
      type: String,
    },
    created:  {
      type: Date,
      default: Date.now
    },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
