
"use strict";

const Hapi = require( "hapi" );
const authVal = require("./middlewares/authStrategy");
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const middleware = require('./middlewares/i18')
const Pack = require('../package');

module.exports.createServer = async config => {
    const server = Hapi.server( config );

    await server.register(require('hapi-auth-jwt2'));
    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version: Pack.version,
            },
        };
    
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);
    await server.register(middleware.i18n)
    server.auth.strategy('simpleAuth', 'jwt',authVal.sampleAuth);

    await server.route(require('./routes')); //import the routes

    return server;
};

