const mongoose = require('mongoose')
const URL_MONGO = "mongodb+srv://1312255:Aa123456@cluster0.29rkirr.mongodb.net/giving"


async function connect() {
    try {
        mongoose.connect(URL_MONGO)
            .then(res => console.log("**** DB - Connection Success ****"))
            

    }
    catch (err) {
        console.log("DB - Error : ", err)
    }
}

module.exports = { connect }