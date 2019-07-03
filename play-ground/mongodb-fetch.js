
const {MongoClient,ObjectId} = require('mongodb');
//const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/';

// Database Name
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  //assert.equal(null, err);
  if(err){
    return console.log('unable to connect to mongodb', err);
  }
  console.log("Connected successfully to server");
  const db = client.db(dbName);

db.collection('Users').find().count().then((res)=>{
  console.log(JSON.stringify(res,undefined,2));
},(err)=>{
  console.log(err);
});

  client.close();
});
