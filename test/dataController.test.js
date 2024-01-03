const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assuming your app is exported from 'app.js' or 'index.js'
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Tests', () => {
  it('should create a new text', (done) => {
    chai
      .request(app)
      .post('/api/a/creat')
      .send({ title: 'Test Title', contant: 'Test Content' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message').to.equal('Text added successfully');
        expect(res.body).to.have.property('newdata');
        done();
      });
  });

  it('should update a text', (done) => {
    chai
      .request(app)
      .put('/api/a/update/yourIdHere') // replace 'yourIdHere' with a valid ID
      .send({ title: 'Updated Title', contant: 'Updated Content' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message').to.equal('Text updated successfully');
        expect(res.body).to.have.property('updatedData');
        done();
      });
  });

  it('should get all data', (done) => {
    chai
      .request(app)
      .get('/api/a/alldata')
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get data by ID', (done) => {
    chai
      .request(app)
      .get('/api/a/singledata/yourIdHere') // replace 'yourIdHere' with a valid ID
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').to.equal('Data retrieved successfully');
        expect(res.body).to.have.property('data');
        done();
      });
  });

  it('should delete a text', (done) => {
    chai
      .request(app)
      .delete('/api/a/delete/yourIdHere') // replace 'yourIdHere' with a valid ID
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').to.equal('Text deleted successfully');
        expect(res.body).to.have.property('deletedData');
        done();
      });
  });
});
