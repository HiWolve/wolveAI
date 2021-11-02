const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.use(express.static("public"));


app.get('/', (req, res) => {
  res.render('homepage');

});

app.get('/1', (req, res) => {
  res.send("1");

});



const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`))
