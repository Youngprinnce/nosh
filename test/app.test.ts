import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);

describe('Server', () => {
  it('Should Welcome to the API', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.eql(
          'Welcome to the API',
        );
        done();
      });
  });

  it('Should display 404 - Not Found', (done) => {
    chai
      .request(app)
      .post('/hello')
      .end((err, res) => {
        console.log(res.body);
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.eql('404 - Not Found');
        done();
      });
  });
});