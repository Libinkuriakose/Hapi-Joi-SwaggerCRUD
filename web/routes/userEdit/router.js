"use strict";
const headerValidator = require('../../middlewares/validator');
const deleteHandle = require('./userDelete');
const update = require('./userUpdate');
const errorMsg = require('../../middlewares/locales');

module.exports= [

        //updating user profile
    /**
			* API NAME     : userUpdate
			* Method       : PUT
			* handler      : update.handler,
			* Description  : This route is used to update user profile
			* header       : language,authorisation
	**/	
    {
        method: "PUT",
        path: "/customer/edit",
        options:{
            tags: ['api', 'customer'],
            description: errorMsg['genericErrMsg']['userErrMsg'],
            notes: errorMsg['genericErrMsg']['userErrMsg'],
            auth:'simpleAuth',
            handler:  update.handler,
            validate:{
                payload:update.joiObject,
                headers: headerValidator.headerAuthValidator,
                failAction: (req, h, err) => {
                    throw err
                }
            }
            
        }        
    },

/////deleting user
/**
			* API NAME     : userDelete
			* Method       : DELETE
			* handler      : deleteHandle.handler,
			* Description  : This route is used to delete user profile
			* header       : language,authorisation
	**/	
    {
        method: "DELETE",
        path: "/customer/obliterate",
        options:{
            tags: ['api', 'customer'],
            description: errorMsg['genericErrMsg']['userErrMsg'],
            notes: errorMsg['genericErrMsg']['userErrMsg'],
            auth:'simpleAuth',
            handler:  deleteHandle.handler,
            validate:{
                headers: headerValidator.headerAuthValidator,
                failAction: (req, h, err) => {
                    throw err
                }
            }
            
        }
       
    }
]