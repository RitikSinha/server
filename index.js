const express = require("express");
const Gun = require("gun");

const app = express();
app.use(Gun.serve);
const PORT = process.env.port || 8080;
const server = app.listen(PORT, () => console.log(`listening on ${PORT}`));
Gun({ web: server });