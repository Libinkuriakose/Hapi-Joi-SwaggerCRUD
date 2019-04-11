"use strict";
const signin = require('./userLogin');
const errorMsg = require('../../middlewares/locales');

module.exports= [

        ///post request for signing in
    /**
			* API NAME     : userLogin
			* Method       : POST
			* handler      : signin.handler,
			* Description  : This route is used to login users

	**/	
    {
        method: "POST",
        path: "/customer/login",
        options:{
            tags: ['api', 'customer'],
            description: errorMsg['genericErrMsg']['userErrMsg'],
            notes: errorMsg['genericErrMsg']['userErrMsg'],
            handler:  signin.handler,
            validate:{
                payload:signin.joiObject,
                failAction: (req, h, err) => {
                    throw err
                }
            }
        }
       
    }
]
