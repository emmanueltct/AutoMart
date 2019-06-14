

import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../src/index';

chai.should();
chai.use(chaiHttp);

chai.should();
chai.use(chaiHttp);

describe('oreders update price', () => {
  it('user can make order request', (done) => {
    const order = {
   
      amount: 3000,

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
    .patch('/api/v1/order/1/price')
      .set('x-auth-token', token)
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('data');
        res.body.status.should.eql(200);
        done();
      });
  });

  
  it('when status not pending', (done) => {
    const order = {
      amount: 3000,
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
    .patch('/api/v1/order/3/price')
      .set('x-auth-token', token)
      .send(order)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
        
        done();
      });
    });

  it('when order id not exist', (done) => {
    const order = {
      amount:'40800',
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
    .patch('/api/v1/order/19/price')
      .set('x-auth-token', token)
      .send(order)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
       
        done();
      });
  });
  
  
  it('when user send invalid number', (done) => {
    const order = {
      amount:'',
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
    .patch('/api/v1/order/1/price')
      .set('x-auth-token', token)
      .send(order)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
       
        done();
      });
  });
});
