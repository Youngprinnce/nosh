import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import User from '../src/models/user.model';

const demoUser = {
    firstname: 'john',
    lastname: 'doe',
    email: 'john@doe.com',
    mobile: '08034343434',
    country: 'Nigeria',
    gender: 'male',
    password: 'Password1!'
}

const updateUser = {
    firstname: 'Doe',
    lastname: 'John',
    mobile: '08034343434',
    country: 'Ghana',
    gender: 'female',
}

const loginUser = {
    email: 'john@doe.com',
    password: 'Password1!'
}


chai.use(chaiHttp);

describe('POST /User', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('Should access the dashboard', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(demoUser).end((err,res) => {
        chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send(loginUser).end((err, res) => {
            chai
            .request(app)
            .get('/api/v1/users/dashboard')
            .set('Authorization', `Bearer ${res.body.data.access_token}`).end((err, res) => {
            expect(res.status).to.be.eql(200);
            done();
        });
      });
    });
  });

  it('Should update a user', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(demoUser).end((err,res) => {
        chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send(loginUser).end((err, res) => {
            chai
            .request(app)
            .put('/api/v1/users/update')
            .set('Authorization', `Bearer ${res.body.data.access_token}`)
            .send(updateUser)
            .end((err, res) => {
            expect(res.status).to.be.eql(200);
            expect(res.body).to.be.an('object');
            done();
          });
      });
    });
  });
});