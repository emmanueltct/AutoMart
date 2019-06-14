

import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../src/index';

chai.should();
chai.use(chaiHttp);

chai.should();
chai.use(chaiHttp);

describe('car Ad update price', () => {
  it('user can make Advertisement price', (done) => {
    const car = {
   
        price: 3000,

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
    .patch('/api/v1/car/1/price')
      .set('x-auth-token', token)
      .send(car)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('data');
        res.body.status.should.eql(200);
        done();
      });
  });


  it('user send invalid data', (done) => {
    const car= {
 
        price:'jjjjjjj',
     
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
    .patch('/api/v1/car/1/price')
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
