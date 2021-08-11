const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("This is comming from Node.js APi...")
} )
const port = 8080;
app.listen(port, () => console.log(`The port is running from ${port}`) )