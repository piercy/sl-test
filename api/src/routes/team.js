const teamService = require("../services/teamService");

async function getTeam(req, res) {
    try {
        const team = await teamService.get(req.params.teamId);
        res.json(team);
    } catch (e) {
        // Returning the exception object just for demonstration purposes.  Shouldn't do this for production.
        res.status(400).send(e);
    }
}

async function deleteTeam(req, res) {
    await teamService.remove(req.params.teamId);
    res.sendStatus(200);
}

async function postTeam(req, res) {
    try {
        const team = req.body;
        const newTeam = await teamService.add(team);
        res.json(newTeam);
    } catch (e) {
        res.status(400).send(e);
    }
}
async function updateTeam(req, res) {
    try {
        const team = req.body;
        const newTeam = await teamService.update(req.params.teamId, team);
        res.json(newTeam);
    } catch(e) {
        res.status(400).send(e);
    }
}

async function getTeams(req, res) {
    const team = await teamService.getAll();
    res.json(team);
}

module.exports = { getTeams, postTeam, getTeam, deleteTeam, updateTeam };