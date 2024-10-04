const mongoose = require("mongoose");

const ConstituentSchema = new mongoose.Schema(
  {
    itemNumber: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    itemCategory: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    itemDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Constituent", ConstituentSchema);
