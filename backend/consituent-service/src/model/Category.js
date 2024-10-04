const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryApprovers: {
    type: [String],
    required: true,
  },
});
