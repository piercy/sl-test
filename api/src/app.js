const express = require("express");
const cors = require("cors");
const team = require("./routes/team")
const country = require("./routes/country")
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.route("/team")
    .get(team.getTeams)
    .post(team.postTeam);
app.route("/team/:teamId")
    .get(team.getTeam)
    .delete(team.deleteTeam)
    .put(team.updateTeam);

app.route("/country")
    .get(country.getCountries)


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

module.exports = app;