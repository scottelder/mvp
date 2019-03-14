require('dotenv').config()
const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;
const Schema = mongoose.Schema; 
mongoose.connect(dbURI, {useNewUrlParser: true});

const actorSchema = new Schema({
  name: String,
  image_URL: String,
  owner: String,
  votes: Number,
});

const Actor = mongoose.model('Actor', actorSchema);

const addActor = (newActor, callback) => {
  const actorRecord = new Actor(newActor);
  actorRecord.save()
    .then(() => callback(null, `We've just landed on Klendathu`))
    .catch((err) => callback(err, null));
};

const findActor = (targetActor, callback) => {
  targetActor = targetActor.substring(1,targetActor.length-1) //Something weird is going on with the "" on the incoming data
  const percent20 = /%20/g;
  targetActor = targetActor.replace(percent20, ' ');
  const reggie = new RegExp(targetActor, 'i'); //Problems with spaces in searches (%20)
  Actor.find({name: reggie})
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
};

const updateVotes = (target, callback) => {
  findActor(target, (err, data) => {
    if (err) callback(err, null)
    else {
      data[0].votes = data[0].votes+1;
      data[0].save();
      callback(null, 'success');
    };
  });
};

const findHighestVoted = (target, callback) => {
  Actor.find({owner: target}, {_id:0, owner:0}).sort(({votes: -1})).limit(5)
    .then(data => callback(null, data))
    .catch(err => callback(err, null))
};

module.exports = {
  addActor: addActor,
  findActor: findActor,
  updateVotes: updateVotes,
  findHighestVoted: findHighestVoted
};