const db = require('../database/dbConfig')

module.exports = {
    add,
    find
}


function find(){
    return db("users").where(filter)
}

function add (user){
    const [id] = await db("users").insert(user, "id")
}