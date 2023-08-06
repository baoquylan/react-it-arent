const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
process.env.NODE_ENV === 'production' ?
   dotenv.config({ path: __dirname + "/.env" }) : dotenv.config({ path: __dirname + "/.env.dev" });
   app.use(bodyParser.json({ limit: "900mb" }));
const port = process.env.PORT || 8002;


app.use('/api/auth', require("./src/routes/Auth.route"));
app.use('/api/main', require("./src/routes/Main.route"));

const httpServer = http.createServer(app);
var server = httpServer;
server.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});

