const router = require("express").Router();
const Users = require("./users-model");
router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err.message);
      res.send(500).json({ message: err.message });
    });
});

module.exports = router;
