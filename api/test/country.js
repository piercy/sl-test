//During the test the env variable is set to test
process.env.PORT = 3001;
process.env.MONGO_CONNECTION_STRING = "mongodb://localhost:27017/SLTestDummy"

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../src/app');
let should = chai.should();



chai.use(chaiHttp);


describe('Country', () => {

    describe('/GET Country', () => {
        it('it should GET all countries', (done) => {
            chai.request(app)
                .get('/country')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(53);
                    done();
                });
        });
    });
});