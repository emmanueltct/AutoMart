

import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../src/index';

chai.should();
chai.use(chaiHttp);

chai.should();
chai.use(chaiHttp);

describe('car update status', () => {

  it('it shoult update the status value of car', (done) => {
    const car = {
      status:'sold',
    };

    const user_token = {
      id:1 ,
      email:"emmanuelmunezero@gmail.com",
      first_name:"munezero",
      last_name:"emmanuel",
      is_admin: 'false',
    };
    const token =jwt.sign({ user_token }, 'scretkey');
    chai.request(app)
    .patch('/api/v1/car/2/status')
      .set('x-auth-token', token)
      .send(car)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
       
        done();
      });
  });



  it('when user send invalid value to status', (done) => {
    const car = {
      status:1233345,
    };

    const user_token = {
      id:1 ,
      email:"emmanuelmunezero@gmail.com",
      first_name:"munezero",
      last_name:"emmanuel",
      is_admin: 'false',
    };
    const token =jwt.sign({ user_token }, 'scretkey');
    chai.request(app)
    .patch('/api/v1/car/1/status')
      .set('x-auth-token', token)
      .send(car)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
       
        done();
      });
  });

  it('when the status not available', (done) => {
    const car = {
      status:'sold',
    };

    const user_token = {
      id:1 ,
      email:"emmanuelmunezero@gmail.com",
      first_name:"munezero",
      last_name:"emmanuel",
      is_admin: 'false',
    };
    const token =jwt.sign({ user_token }, 'scretkey');
    chai.request(app)
    .patch('/api/v1/car/4/status')
      .set('x-auth-token', token)
      .send(car)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
       
        done();
      });
  });

  it('when car not available', (done) => {
    const car = {
      status:'sold',
    };

    const user_token = {
      id:1 ,
      email:"emmanuelmunezero@gmail.com",
      first_name:"munezero",
      last_name:"emmanuel",
      is_admin: 'false',
    };
    const token =jwt.sign({ user_token }, 'scretkey');
    chai.request(app)
    .patch('/api/v1/car/190/status')
      .set('x-auth-token', token)
      .send(car)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
       
        done();
      });
  });



});

