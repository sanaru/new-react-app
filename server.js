const express = require('express');
const app = express();
const path = require('path');

// server configuration
const PROTOCOL = 'http://';
const HOST = 'localhost';
const PORT = '3000';
const JSON_DIR = path.resolve( __dirname, 'jsons' );

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

// delay middleware function
const delay = ( delay = 100 ) => {
    return ( request, response, next ) => {
        setTimeout( next, delay );
    };
};


// submit form and return JSON resoonse
app.get( '/jsons/:file', delay( 1000 ), ( req, res ) => {

    // HTTP status header
    //res.status( 401 );
    res.sendFile( path.resolve( JSON_DIR, req.params.file ) );
    
} );
