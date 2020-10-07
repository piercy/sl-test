const teamService = require("../services/teamService");

async function getTeam(req, res) {
    const team = await teamService.get(req.params.teamId);
    res.json(team);
}

async function deleteTeam(req, res) {
    await teamService.remove(req.params.teamId);
    res.sendStatus(200);
}

async function postTeam(req, res) {
    const team = req.body;
    const newTeam = await teamService.add(team);
    res.json(newTeam);
}
async function updateTeam(req, res) {
    const team = req.body;
    const newTeam = await teamService.update(req.params.teamId, team);
    res.json(newTeam);
}

async function getTeams(req, res) {
    const team = await teamService.getAll();
    res.json(team);
}

module.exports = { getTeams, postTeam, getTeam, deleteTeam, updateTeam };