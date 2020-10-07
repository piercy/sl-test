const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teamSchema = new Schema({
    ID: {
        type: Number,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    },
    Eliminated: {
        type: Boolean,
        default: false,
    },
});
const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
