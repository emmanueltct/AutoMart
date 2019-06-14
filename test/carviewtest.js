
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../src/index';
chai.use(chaiHttp);
should = chai.should();

describe('car view all', () => {
  it('view all cars', (done) => {
    const user_token = {
        id:1 ,
        email:"emmanuelmunezero@gmail.com",
        first_name:"munezero",
        last_name:"emmanuel",
        is_admin: 'admin',
      };

      const token =jwt.sign({ user_token }, 'scretkey');
      chai.request(app)
      .get('/api/v1/car')
      .set('x-auth-token', token)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
        done();
      });
  });

  
});