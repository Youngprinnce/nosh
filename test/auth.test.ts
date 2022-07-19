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

const loginUser = {
    email: 'john@doe.com',
    password: 'Password1!'
}


chai.use(chaiHttp);

describe('POST /Auth', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('Should return validation error if bad email is used', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstname: 'john',
        lastname: 'doe',
        email: 'ajiboyeadedotun1.com',
        mobile: '08034343434',
        country: 'Nigeria',
        gender: 'male',
        password: 'Password1!'
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.be.eql('"email" must be a valid email');
        done();
      });
  });

  it('Should signup the user', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(demoUser)
      .end((err, res) => {
        expect(res.status).to.be.eql(201);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.be.eql('User created successfully');
        done();
      });
  });


  it('Should signin a user', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(demoUser).end((err,res) => {
        chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send(loginUser).end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.be.eql('success');
        expect(res.body.data).to.be.an('object');
        expect(res.body.data.access_token).to.be.an('string');
        expect(res.body.data.refresh_token).to.be.an('string');
        done();
      });
    });
  });

  it('Should refresh token', (done) => {
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
            .post('/api/v1/auth/refresh-token')
            .send({refreshToken: res.body.data.refresh_token})
            .end((err, res) => {
            expect(res.status).to.be.eql(200);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.be.eql('success');
            expect(res.body.data).to.be.an('object');
            expect(res.body.data.access_token).to.be.an('string');
            expect(res.body.data.refresh_token).to.be.an('string');
            done();
          });
      });
    });
  });
});