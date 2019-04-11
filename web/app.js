
"use strict";

const Hapi = require( "hapi" );
const authVal = require("./middlewares/authStrategy");
const middleware = require('./middlewares/i18')
const swagger = require('./middlewares/swagger');



module.exports.createServer = async config => {
    const server = Hapi.server( config );

    await server.register(require('hapi-auth-jwt2'));
    await server.register(swagger);
    await server.register(middleware.i18n)
    server.auth.strategy('simpleAuth', 'jwt',authVal.sampleAuth);
    await server.route(require('./routes')); //import the routes

    return server;
};

