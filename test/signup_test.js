/* eslint-disable no-undef */

/* eslint-disable linebreak-style */

import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.use(chaiHttp);

should = chai.should();

describe('user signup', () => {
  it('user should be able to signup', (done) => {
    const user = {
      email: 'emmanuel1110@gmail.com',
      first_name: 'munezero',
      last_name: 'emmanuel',
      password: '12345',
      address: 'kigali'
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('data');
        done();
      });
  });
  it('user send inavild or empty email', (done) => {
    const user = {
      email: 'emmanu0gmail.com',
      first_name: 'munezero',
      last_name: 'emmanuel',
      password: '12345',
      address: 'kigali'
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
        done();
      });
  });
  it('user send existing email', (done) => {
    const user = {
      email: 'emmanuel@gmail.com',
      first_name: 'munezero',
      last_name: 'emmanuel',
      password: '12345',
      address: 'kigali'
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('error');
        done();
      });
  });
});
