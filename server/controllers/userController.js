module.exports ={
  getAllUsers(req, res) {
    const db = req.app.get("db");
    db.dev_tools
      .get_all_users()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "we done goofed, try again later" });
        console.log(err);
      });
  }
}