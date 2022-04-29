const express = require('express');
const app = express();


app.get("/api", (req, res) => {
    res.json("there is something yey");
});

app.listen(5000, () => {console.log("Local: http://localhost:5000")});