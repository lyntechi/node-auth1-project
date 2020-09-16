const db = require("../database/dbConfig");

module.exports = {
  find,
  add,
};

function find() {
  return db("users");
}

function add(user) {
  const [id] = db("users").insert(user, "id");
  return findById(id);
}

function findById(id) {
  return db("users").where({ id }).first();
}
