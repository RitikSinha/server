const express = require("express");
const Gun = require("gun");

const app = express();
app.use(Gun.serve);
app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is running')
    .end();
});


const server_port = process.env.YOUR_PORT || process.env.PORT || 80;
const server_host = process.env.YOUR_HOST || '0.0.0.0';
const server = app.listen(server_port, server_host,() => console.log(`listening on ${PORT}`));
Gun({ web: server });
