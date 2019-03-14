require('dotenv').config();
const express = require('express');
const bodyParser = require ('body-parser');
const path = require('path');
const axios = require('axios');
const db = require('../db/index.js');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const distPath = path.join(__dirname, '../dist')
const imgURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
const searchURL = `https://api.themoviedb.org/3/search/person?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&query=`
const reggie = /\s/g;

//`https://api.themoviedb.org/3/person/{person_id}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US` //Specific
// https://api.themoviedb.org/3/search/person?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&query=Scarlet%20Johanson&page=1&include_adult=false //Search
// https://www.themoviedb.org/search?query=Mads%20Mikkelsen&language=en-US


app.post('/search', (req, res) => {
  let vanDien = JSON.stringify(req.body.data);
  vanDien = vanDien.replace(reggie, '%20');
  let dizzy;

  db.findActor(vanDien, (err, data) => {
    if (err) console.log(err, 'died there')
    else dizzy = data;
    if (!dizzy.length) {
      axios.get(searchURL+vanDien)
        .then(data => res.send({name: data.data.results[0].name, image_URL: imgURL+data.data.results[0].profile_path}))
        .catch(err => console.log(err, 'AAAAAAHHHHH!! HELP ME!'))
    }
    else res.send(dizzy[0]);
  });
});

app.use(express.static(distPath));

const port = 3012;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});