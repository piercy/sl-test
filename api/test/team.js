//During the test the env variable is set to test
process.env.PORT = 3001;
process.env.MONGO_CONNECTION_STRING = "mongodb://localhost:27017/SLTestDummy"

let Team = require('../src/models/teamModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../src/app');
let should = chai.should();



chai.use(chaiHttp);

// Test the Team api
describe('Team', () => {
    //Before each test we clear down the teams collection
    beforeEach((done) => {
        Team.deleteMany({}, (err) => {
            done();
        });
    });

    // test when no teams are in the database
    describe('/GET Team', () => {
        it('it should GET no teams', (done) => {
            chai.request(app)
                .get('/team')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
    // test returning all teams
    describe('/GET Team', () => {
        it('it should GET 1 team', (done) => {
            let dummyTeam = new Team({
                ID: 1,
                Name: "St Martins",
                Country: "England",
                Eliminated: false
            });
            dummyTeam.save((err, team) => {
                chai.request(app)
                    .get('/team')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(1);
                        done();
                    });
            });
        });
    });

    // test creating a new team
    describe('/POST Team', () => {
        it('it should create a new team', (done) => {
            let dummyTeam = {
                ID: 1,
                Name: "St Martins",
                Country: "England",
                Eliminated: false
            }

            chai.request(app)
                .post('/team')
                .send(dummyTeam)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

    });

    // test getting an individual team
    describe('/GET/:id team', () => {
        it('it should GET a team by Id', (done) => {
            let dummyTeam = new Team({
                ID: 1,
                Name: "St Martins",
                Country: "England",
                Eliminated: false
            });
            dummyTeam.save((err, team) => {
                chai.request(app)
                    .get('/team/' + dummyTeam.ID)
                    .send(dummyTeam)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('ID');
                        res.body.should.have.property('Name');
                        done();
                    });
            });

        });
    });

    // test updating an individual team
    describe('/PUT/:id team', () => {
        it('it should UPDATE a team', (done) => {
            let dummyTeam = new Team({
                ID: 1,
                Name: "St Martins",
                Country: "England",
                Eliminated: false
            });

            dummyTeam.save((err, team) => {
                chai.request(app)
                    .put('/team/' + dummyTeam.ID)
                    .send({
                        ID: 1,
                        Name: "St Martins!",
                        Country: "England",
                        Eliminated: true
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('Eliminated').eql(true);
                        res.body.should.have.property('Name').eql("St Martins!");
                        done();
                    });
            });
        });
    });

});