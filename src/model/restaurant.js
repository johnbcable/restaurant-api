import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let RestaurantSchema = new Schema({
  name: String
});


module.exports = mongosse.model('Restaurant', RestaurantSchema);
