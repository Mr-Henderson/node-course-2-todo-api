//const MongoClient = require('mongodb').MongoClient; betterform below
const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
//db.collection('Todos').findOneAndUpdate({
//  _id: new ObjectID('58e647bb2e9c691b56fdbcdc')
//}, {
//  $set: {
//    completed: true
//  }
//}, {
//  returnOrigional: false
//}).then((result) => {
//  console.log(result);
//});
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('58e78ef90d89737b21b0c061')
}, {
  $set: {
    name: 'Turd Furguson'   
  },
  $inc: {
    age: 1
}
}, {
  returnOrigional: false
}).then((result) => {
  console.log(result);
});
  
//db.close();
});













