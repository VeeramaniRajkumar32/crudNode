const MongoClient = require('mongodb').MongoClient

let database;

 function getDatabase() {
    const client =  MongoClient.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser: true, useUnifiedTopology: true })
    database = client.db('blog')
    if(!database){
        console.log("Database not connect");
    }else{
        console.log("Database connect");
    }
    return database;
}

module.exports = {
    getDatabase
}