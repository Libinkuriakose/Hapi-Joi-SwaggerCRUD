"use strict";

const app = require( "./web/app" );
const db = require('./models/mongodb');
const port = 3004;
const config = { port };

const start = async () => {
    try {
        // create the server
        const server = await app.createServer( config );
        // start the server
        await server.start();
        await db.connect();

        console.log( `Server running at  http://localhost:${ port }` );
    } catch ( err ) {
        console.log( err );
        process.exit( 1 );
    }
}

start();
