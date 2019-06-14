
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../src/index';

chai.should();
chai.use(chaiHttp);

describe('create car', () => {
    
  it('user can make order request', (done) => {
    const carschema= {
        owner:1,
        state: 'used', 
        status :'available', 
        price :1000 ,
        model :'v3',
        manufacturer:'honda', 
        body_type :'trailer'
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
      .post('/api/v1/car')
      .set('x-auth-token', token)
      .send(carschema)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('data');
        res.body.status.should.eql(200);
        done();
      });
  });


it('user try to send invalid data', (done) => {
    const carschema= {
        owner:"22",
        state: 'used', 
        status :'available', 
        price :"188bbbc" ,
        model :'v3',
        manufacturer:'honda', 
        body_type :'trailer'
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
  .post('/api/v1/car')
  .set('x-auth-token', token)
  .send(carschema)
  .end((err, res) => {
    res.should.have.status(400);
    res.should.be.an('object');
    res.body.should.have.property('error');
    res.body.status.should.eql(400);
    done();
  });
});

it('when user id not exist', (done) => {
    const carschema= {
        owner:14,
        state: 'used', 
        status :'available', 
        price :"188bbbc" ,
        model :'v3',
        manufacturer:'honda', 
        body_type :'trailer'
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
  .post('/api/v1/car')
  .set('x-auth-token', token)
  .send(carschema)
  .end((err, res) => {
    res.should.have.status(400);
    res.should.be.an('object');
    res.body.should.have.property('error');
    res.body.status.should.eql(400);
    done();
  });
});
});
