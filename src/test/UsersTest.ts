// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as server from '../index';
import * as util from './util'

let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  beforeEach((done) => { // Before each test we empty the database
    util.clearTables(done);
    // done();
  });
   /*
    * Test the /GET route
    */
  describe('/GET user', () => {
    it('it should GET all the users', (done) => {
      chai.request(server)
        .get('/api/user')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

});
