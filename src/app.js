const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {

    res.json({
        'hello': 'hi!'
    });

});

router.get('/test', (req, res) => {

    res.json({
        'hello': 'tested !'
    });

});


const PORT = process.env.PORT || 3000;
app.use(express.json());


app.listen(PORT, ()=> (console.log("Le serveur écoute sur le port:"+ PORT)));

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);