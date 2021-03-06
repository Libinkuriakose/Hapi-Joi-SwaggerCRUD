"use strict";
const customer = require('../../../models/sampleDBManage/customer')
const errorMsg = require('../../middlewares/locales');
const joi = require('joi');


/////fetching all user documents
let handler = async (request, h) => {
    try{
        console.log(request);
    const data= await customer.getAll();
    return await !data ? h.response({message:request.i18n.__('userErrMsg')['405'],code:405}).code(405)
                       : h.response({message:request.i18n.__('genericErrMsg')['200'],code:200,data:data}).code(200)
    }catch(err){
        return h.response(err.errmsg).code(err.status)
    }

};


        
module.exports={
    handler
}