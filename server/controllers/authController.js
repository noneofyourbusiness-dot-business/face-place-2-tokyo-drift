const bcrypt = require("bcryptjs");
module.exports = {
  emailVerif: (req, res, next) => {
    const db = req.app.get("db");
    const user_id = +req.params.id;

    db.login_register.email_verif
      .email_verif(user_id)
      .then(result => {
        console.log(user_id);
        res
          .status(200)
          .send({ result, message: "Congrats! You are now verified!" });
      })
      .catch(err => {
        res.status(500).send({
          err,
          errorMessage:
            "Something went wrong in the email verification function."
        });
        console.log(
          err,
          "Something went wrong in the email verification function."
        );
      });
      next()
  },
  preCheckEmail: (req, res, next) => {
    const db = req.app.get("db");
    const { email }= req.body;
    
    db.login_register.email_verif.check_verif(email)
      .then(result => {
        if (result === true) {
          res.status(200).send({ result, message: "Your email is already verified" });
        } else if (result === false) {
          next();
        }
      })
      .catch(err => {
        res.status(500).send({
          err,
          errorMessage:
            "Something went wrong in the check verification function."
        });
        console.log(
          err,
          "Something went wrong in the check verif function."
        );
      });
  },
  getUserSession(req, res) {
    if (req.session.user) {
      return res.status(200).send(req.session.user);
    } else {
      return res.status(412).send({ message: "please login first" });
    }
  }
};
