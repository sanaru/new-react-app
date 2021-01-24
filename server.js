const express = require('express');
const app = express();

// server configuration
const PROTOCOL = 'http://';
const HOST = 'localhost';
const PORT = '3000';

const SERVER_URL = PROTOCOL + HOST + ':' + PORT;

// console.log that your server is up and running
app.listen( PORT, () => console.log(`Listening on port ${PORT}`));

// create a GET route
app.get('/', (req, res) => {
    res.send( 'WORKING' );
});

// set appropriate CORS header
app.use( ( req, res, next ) => {
    res.set( {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': req.get( 'Access-Control-Request-Headers' ),
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    } );

    next();
} );

// create a GET route
app.get('/test', (req, res) => {
    res.send( 'WORKING' );
});