var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../web/app');
var should = chai.should();
const chaiJWT = require('chai-jwt');
const faker = require('faker') ;
chai.use(chaiJWT);
chai.use(chaiHttp);
const baseURL =  'http://localhost:3005';


// it('should list ALL blobs on /blobs GET', function(done) {
//     chai.request('http://localhost:3005/')
//       .post('customer/gain')
//       .end(function(err, res){
//         res.should.have.status(200);
//         done();
//       });
//   });
// it('should return 200 + data entered with +info',(done)=>{
//     chai.request(baseURL).post('/customer/signup')
//     .send(payload)
//     .end((err,res)=>{
//         res.should.have.status(200);
//         res.should.be.json;
//         res.body.should.be.a('object');
//         done();
//     });
// });
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
const loginCreds = {
    userName : payload.userName,
    password : "password"
}
it('should return 200 + data entered with +info',(done)=>{
    chai.request(baseURL)
    .post('/customer/signup')
    .send(payload)
    .end((err,res)=>{
        try{
      console.log("!!!!!!!!!!!",res.body,"##########",err)
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.data.should.have.property('insertedCount');
      res.body.data.should.have.property('ops');
      res.body.should.have.property('code');
      res.body.code.should.equal(200);
      chai.request(baseURL)
      .post('/customer/login')
      .send(loginCreds)
      .end((err,res)=>{
          
      })
        done();
        }catch(err){
            console.log(err);
        }
    });
});