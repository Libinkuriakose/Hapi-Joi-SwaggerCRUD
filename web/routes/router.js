const fetchoperations = require('./GET_data');
const login_logout = require('./log-in-out');
const signup = require('./signup');
const userEdit = require('./userEdit');

module.exports = [].concat(
    fetchoperations,
    login_logout,
    signup,
    userEdit
)