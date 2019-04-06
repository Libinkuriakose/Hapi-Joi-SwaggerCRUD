"use strict";
const headerValidator = require('../middlewares/validator');
const deleteHandle = require('./delete');
const getHandle = require('./get');
const signup = require('./signup');
const signin = require('./login');
const update = require('./update');
const getbyID = require('./getbyID');
const errorMsg = require('../middlewares/locales');

module.exports= [
    {
        method: "GET",
        path: "/customer/gain",
        options:{
            tags: ['api', 'customer'],
            description: errorMsg['genericErrMsg']['userErrMsg'],
            notes: errorMsg['genericErrMsg']['userErrMsg'],
            auth:'simpleAuth',
            handler:  getHandle.handler,
            validate: {
                headers: headerValidator.headerAuthValidator,
                failAction: (req, reply, source, error) => {
                    return reply({ message: error.output.payload.message }).code(error.output.statusCode);
                }
            }
        }
    },
    {
        method: "GET",
        path: "/customer/gain/id",
        options:{
            tags: ['api', 'customer'],
            auth:'simpleAuth',
            handler:  getbyID.handler,
            validate: {
                headers: headerValidator.headerAuthValidator,
                failAction: (req, reply, source, error) => {
                    return reply({ message: error.output.payload.message }).code(error.output.statusCode);
                }
            }
        }
    },

    {
        method: "POST",
        path: "/customer/signup",
        options:{
            tags: ['api', 'customer'],
            handler:  signup.handler,
            validate :{
                payload:signup.joiObject
            }
        }
    },


    {
        method: "POST",
        path: "/customer/login",
        options:{
            tags: ['api', 'customer'],
            handler:  signin.handler,
            validate:{
                payload:signin.joiObject
            }
        }
       
    },

    {
        method: "PUT",
        path: "/customer/edit",
        options:{
            tags: ['api', 'customer'],
            auth:'simpleAuth',
            handler:  update.handler,
            validate:{
                payload:update.joiObject,
                headers: headerValidator.headerAuthValidator,
                failAction: (req, reply, source, error) => {
                    return reply({ message: error.output.payload.message }).code(error.output.statusCode);
                }
            }
            
        }        
    },

    {
        method: "DELETE",
        path: "/customer/obliterate",
        options:{
            tags: ['api', 'customer'],
            auth:'simpleAuth',
            handler:  deleteHandle.handler,
            validate:{
                headers: headerValidator.headerAuthValidator,
                failAction: (req, reply, source, error) => {
                    return reply({ message: error.output.payload.message }).code(error.output.statusCode);
                }
            }
            
        }
       
    }
]