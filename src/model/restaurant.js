import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let restaurantSchema = new Schema({
  name: String
});


module.exports = mongosse.model('Restaurant', restaurantSchema);
