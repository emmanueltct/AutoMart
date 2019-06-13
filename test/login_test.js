/* eslint-disable linebreak-style */

import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.should();
chai.use(chaiHttp);


describe('signin', () => {
  it('user should be able to signin', (done) => {
    const user = {
      email: 'emmanuel@gmail.com',
      password: '12345',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('data');
        res.body.status.should.eql(200);
        done();
      });
  });

  it('user send invalid email', (done) => {
    const user = {
      email: 'shdfkjhdsf',
      password: '12345',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
        res.body.status.should.eql(400);
        done();
      });
  });
  it('invalid password', (done) => {
    const user = {
      email: 'emmanuel@gmail.com',
      password: '1234566',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
        res.body.status.should.eql(400);
        done();
      });
  });
});
