
const MongoClient = require('mongodb').MongoClient;
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
  // db.collection('Todos').insertOne(
  //   {
  //     text:"coding",
  //     done:false
  //   },(err,result)=>{
  //     if(err){
  //       return consle.log('unable to do the insertion',err);
  //     }
  //     console.log('inserted successfully',JSON.stringify(result.ops,undefined,2));
  //   }
  // );
db.collection('Users'). insertOne({
  name:'ahmed',
  age:'21',
  location:'cairo'
},(err,res)=>{
  if(err){
    return console.log('unable to insert user',err);
  }
  console.log (JSON.stringify(res.ops,undefined,2));
}
);

  client.close();
});
