const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/user', user);

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});



