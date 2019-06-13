/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.should();
chai.use(chaiHttp);


describe('oreders', () => {
  it('user can make order request', (done) => {
    const user = {
      buyer: 1,
      car_id: 1,
      amount: 3000,
      status: 'Pending',
    };
    chai.request(app)
      .post('/api/v1/order')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('data');
        res.body.status.should.eql(200);
        done();
      });
  });
});
