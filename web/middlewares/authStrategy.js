'use strict';
const HAPI_AUTH_JWT = require('hapi-auth-jwt2');
const auth = require('../../models/sampleDBManage/auth');
var AUTH = module.exports = {};

let secretKey = 'isSecret';
//
const ValidateJWT = async (decoded, request) => {
    request._id=decoded._id;
    request.userName=decoded.userName;
    let isMatch = await auth.codeCheck(decoded.userName,decoded.accessCode);
    return await isMatch == -1 
                                ? {isValid:false}
                                :isMatch==-2
                                ?{isValid:false}
                                :{isValid:true}
};

function tokenError(context) {
    return context;
}

AUTH.sampleAuth = {
    key: secretKey,
    validate: ValidateJWT,
    verifyOptions: {
        algorithms: ['HS256'],
        ignoreExpiration: true,
    },
    errorFunc: function (context) {
        return tokenError(context);
    }
}
AUTH.HAPI_AUTH_JWT = HAPI_AUTH_JWT;

module.exports = AUTH;
