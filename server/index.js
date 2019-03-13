const express = require('express');
const bodyParser = require ('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const distPath = path.join(__dirname, '../dist')

app.use(express.static(distPath));

const port = 3012;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});