require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const {
  SESSION_SECRET,
  S3_BUCKET,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  SERVER_PORT,
  CONNECTION_STRING
} = process.env;

const app = express();

// TOP LEVEL MIDDLEWARE \\
app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);
// app.use(express.static(`${__dirname}/../build`));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

// ENDPOINTS \\


massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("TAC-COM ONLINE");
  app.listen(SERVER_PORT, () =>
    console.log(`CONSTRUCTING ${SERVER_PORT} PYLONS`)
  );
});
