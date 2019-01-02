const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  isInvited: Boolean,
  isAttending: Boolean,
  groupName: String,
});

//Define model
const guestSchema = new Schema({
  firstName: { type: String, lowercase: true },
  lastName: { type: String, lowercase: true },
  groupName: { type: String, lowercase: true },
  guestSide: { type: String, lowercase: true },
  events: [ eventSchema ],
});

//Create model class
const ModelClass = mongoose.model('guest', guestSchema);

//Export the model
module.exports = ModelClass;