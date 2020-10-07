const mongoose = require("mongoose");
const { type } = require("os");

const tireSchema = new mongoose.Schema({
  brand: String,
  name: String,
  price: Number,
  img: {
    type: String,
    default:
      "https://www.michelinman.com/on/demandware.static/-/Sites-michelin-master-catalog/default/dw39c2fbd3/images/tires/premier-as/tire-premier-as.png",
  },
  inStock: Number,
  carTypes: [String],
});

const Tire = mongoose.model("Tire", tireSchema);

module.exports = Tire;
