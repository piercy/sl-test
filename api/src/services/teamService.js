const mongoose = require("mongoose");
const Team = require("../models/teamModel");

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));

const get = async function (teamId) {
    return Team.findOne({ID: teamId});
};

const getAll = async function () {
    return Team.find({});
};

const add = async function (team) {
    let exists = await Team.exists({ID: team.ID});
    if (!exists) {
        const newTeam = new Team (team);
        return await newTeam.save();
    } else {
        //TODO: Handle Error
    }
};
const update = async function (teamId, team) {
    let dbTeam = await Team.findOne({ID: teamId});
    if (dbTeam != null) {
        return await Object.assign(dbTeam, team).save();
    } else {
        //TODO: Handle Error
    }
};
const remove = async function (teamId) {
   Team.deleteOne({ID: teamId});
};

module.exports = {
    get,
    add,
    remove,
    update,
    getAll
};