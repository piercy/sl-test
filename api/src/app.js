const express = require("express");

const PORT = process.env.PORT;
const app = express();


app.get("/helloworld", async function (req, res) {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});