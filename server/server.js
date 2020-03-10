require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authCtrl = require("./controllers/authController.js");
const nmlrCtrl = require("./controllers/nodemailerController.js");
const s3Ctrl = require("./controllers/s3Controller.js");
const lRCtrl = require("./controllers/loginRegisterController.js");
const postCtrl = require("./controllers/postController.js");
const comCtrl = require("./controllers/comController.js");
const userCtrl = require("./controllers/userController.js");

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

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
// HOSTING \\
// app.use(express.static(`${__dirname}/../build`));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

// ENDPOINTS \\
//! AUTH ENDPOINTS \\
app.put("/api/emailverif/:id", authCtrl.emailVerif, lRCtrl.login);
app.get("/api/pre-check/:email", authCtrl.preCheckEmail);
app.get("/api/session", authCtrl.getUserSession);

// LOGIN - REGISTER \\
app.post("/api/register", lRCtrl.register, nmlrCtrl.nodemailer);
app.post("/api/login", lRCtrl.login);
app.delete("/api/logout", lRCtrl.logout);

// USER ENDPOINTS \\
app.get("/api/users", userCtrl.getAllUsers);

// POST ENDPOINTS \\
app.post("/api/posts", postCtrl.makePost);

// COMMENT ENDPOINTS \\

// NODEMAILER \\
app.post("/api/send", nmlrCtrl.nodemailer);

// AWS S3 \\
app.get("/sign-s3", s3Ctrl.run);

// MASSIVE \\
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("TAC-COM ONLINE.");
  app.listen(SERVER_PORT, () =>
    console.log(`YOU MUST CONSTRUCT ${SERVER_PORT} MORE PYLONS.`)
  );
});
