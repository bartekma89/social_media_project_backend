const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const http = require("http");
const app = express();
const passport = require("passport");

const register = require("./routes/api/register");
const user = require("./routes/api/user");
const login = require("./routes/api/login");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const db = require("./db");
const passportStrategy = require("./services/passport");

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use("/join", register);
app.use("/login", login);
app.use("/profile", profile);
app.use("/users", user);
app.use("/posts", posts);

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
