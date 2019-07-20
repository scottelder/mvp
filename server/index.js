require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require ('body-parser');
const path = require('path');
const axios = require('axios');
const db = require('../db/index.js');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
const distPath = path.join(__dirname, '../dist')
const imgURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
const searchURL = `https://api.themoviedb.org/3/search/person?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&query=`
const reggie = /\s/g;

//`https://api.themoviedb.org/3/person/{person_id}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US` //Specific
// https://api.themoviedb.org/3/search/person?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&query=Scarlet%20Johanson&page=1&include_adult=false //Search
// https://www.themoviedb.org/search?query=Mads%20Mikkelsen&language=en-US


app.post('/search', (req, res) => {
  let vanDien = JSON.stringify(req.body.data);
  const owner = req.body.owner;
  vanDien = vanDien.replace(reggie, '%20');
  let dizzy;

  db.findActor(vanDien, owner, (err, data) => {
    if (err) console.log(err, 'died there')
    else dizzy = data;
    if (!dizzy.length) {
      axios.get(searchURL+vanDien)
        .then(data => {
          const firstResult = {
            actor: data.data.results[0].name, 
            image_URL: imgURL+data.data.results[0].profile_path,
            owner: owner,
            votes: 1
          }
            return firstResult;
          })
        .then(data => {res.status(201).send(data); return data})
        .then(data => db.addActor(data, (err, data) => {
          if (err) console.log(err, 'died there again')
          else console.log(data)
        }))
        .catch(err => console.log(err, `Denise Richard's Acting`))
    }
    else res.status(201).send(dizzy[0]);
  });
});

app.post('/vote/:id', (req, res) => {
  const target = req.body.data;
  const owner = req.params.id;
  db.updateVotes(target, owner, (err, data) => {
    if (err) console.log(err, 'shit')
    else res.status(201).send(data);
  });
});

app.get('/voted/:id', (req, res) => {
  const target = req.params.id;
  db.findHighestVoted(target, (err, data) => {
    if (err) console.log(err, 'shit')
    else res.send(data);
  });
});

app.use(express.static(distPath));

const port = process.env.PORT || 3012;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});