const bcrypt = require("bcryptjs");
module.exports = {
  register: async (req, res, next) => {
    const db = req.app.get("db");
    const { email, password, profilePic, firstName, lastName } = req.body;

    const alreadyExists = await db.login_register.register
      .find_user(email)
      .catch(err => {
        console.log(err, "error in find user query");
      });
    if (alreadyExists[0]) {
      return res.status(409).send({ message: "E-mail already in use." });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const user = await db.login_register.register
        .add_user({
          first_name: firstName,
          last_name: lastName,
          prof_pic: profilePic
        })
        .catch(err => {
          res.status(500).send({
            err,
            errorMessage: "Something went wrong in the add user function"
          });
          console.log({
            err,
            errorMessage: "Something went wrong in the add user function"
          });
        });
      const user_id = user[0].user_id;
      console.log(user_id);

      db.login_register.register.add_hash({ hash, user_id }).catch(err => {
        res
          .status(500)
          .send({
            err,
            message: "something went wrong in the add hash function"
          });
        console.log({
          err,
          message: "something went wrong in the add hash function"
        });
      });

      db.login_register.register
        .create_user_verif({ email, user_id })
        .catch(err => {
          res
            .status(500)
            .send({
              err,
              message:
                "something went wrong in the create user verification function"
            });
          console.log({
            err,
            message:
              "something went wrong in the crate user verification function"
          });
        });

      db.login_register.register.create_user_info(user_id).catch(err => {
        res
          .status(500)
          .send({
            err,
            message: "something went wrong in the create user info function"
          });
        console.log({
          err,
          message: "something went wrong in the create user info function"
        });
      });
      res
        .status(200)
        .send({
          message: `user ${firstName} ${lastName} created. Please check your email for an email verification link`
        });
      next();
    }
  }
};
