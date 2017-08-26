const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const fs = require('fs');
const formidable = require ("express-formidable");

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

