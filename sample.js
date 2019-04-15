const faker = require('faker') ;
const phoneNumber =  (Math.floor(Math.random()*9999999999)+1000000000).toString();
const payload =  {
    userName:faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone:phoneNumber,
    password:"password" 
}
console.log(payload)
console.log(payload.userName)
const a = payload.userName;
console.log(a);