"use strict";
const signup = require('./userSignup');
const errorMsg = require('../../middlewares/locales');
module.exports= [

        ///post request for signup
    /**
			* API NAME     : userSignup
			* Method       : POST
			* handler      : signup.handler,
			* Description  : This route is used for new user signup

	**/	
    {
        method: "POST",
        path: "/customer/signup",
        options:{
            tags: ['api', 'customer'],
            description: errorMsg['genericErrMsg']['userErrMsg'],
            notes: errorMsg['genericErrMsg']['userErrMsg'],
            handler:  signup.handler,
            validate :{
                payload:signup.joiObject,
                failAction: (request, h, err) => {
                    throw  err
                }
            }
        }
    }
]