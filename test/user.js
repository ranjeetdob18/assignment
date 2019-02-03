//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let User = require('../users/user.model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => { 
           done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('/GET users', () => {
      it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
    /*
  * Test the /POST route
  */
  describe('/POST users', () => {
      it('it should not POST a usres without fullName field', (done) => {
          let user = {
					"mobile" : 8009056458,
					"email" : "ranjeet@gmail.com"
				}
        chai.request(server)
            .post('/users/create')
            .send(user)
            .end((err, res) => {
                  res.should.have.status(400);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message');
              done();
            });
      });
       it('it should POST a usres ', (done) => {
          let user = {
          	 "fullName" : "Raneet Bhardwaj",
             "mobile" : 8009056458,
			 "email" : "ranjeet@gmail.com"
          }
        chai.request(server)
            .post('/users/create')
            .send(user)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('User create successfully');
              done();
            });
      });
  });

   /*
  * Test the /PUT/:id route
  */
  describe('/PUT/:id users', () => {
      it('it should UPDATE a users given the id', (done) => {
          let user = new User({
          	 "fullName" : "Raneet Bhardwaj",
             "mobile" : 9000058921,
			 "email" : "ranjeet@gmail.com"
          
          	})
          user.save((err, user) => {
                chai.request(server)
                .put('/users/' + user._id)
                .send(user)
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('User update successfully');
                  done();
                });
          });
      });
  });

   /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id users', () => {
      it('it should DELETE a user given the id', (done) => {
           let user = new User({
          	 "fullName" : "Raneet Bhardwaj",
             "mobile" : 9000058921,
			 "email" : "ranjeet@gmail.com"
          
          	})
          user.save((err, user) => {
                chai.request(server)
                .delete('/users/' + user._id)
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('User delete successfully');
                  done();
                });
          });
      });
  });
});
