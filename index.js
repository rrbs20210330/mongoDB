const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mongoPractica1';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('movies');
  //filter
  const findResult = await collection.find({writer: "Quentin Tarantino"}).toArray();
//   console.log('Found documents =>', findResult);
  //all documents
  const findResult2 = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult2);
  //actor brad pitt
  const findResult3 = await collection.find({actors:"Brad Pitt"}).toArray();
//   console.log('Found documents =>', findResult3);
  //franchise the hobbit
  const findResult4 = await collection.find({franchise:"The Hobbit"}).toArray();
//   console.log('Found documents =>', findResult4);
    //Agregar sinopsis a
    const updateResult = await collection.updateOne({ title:"The Hobbit: An Unexpected Journey" }, { $set: { synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." } });
    console.log('Updated documents =>', updateResult);
    //Agregar sinopsis a
    const updateResult2 = await collection.updateOne({ title:"The Hobbit: The Desolation of Smaug" }, { $set: { synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." } });
    console.log('Updated documents =>', updateResult2);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

  async function insert(){
    const insertResult = await collection.insertMany([{ 
        title : "Fight Club",
        writer : "Chuck Palahniuk",
        year : 1999,
        actors : [
        "Brad Pitt",
        "Edward Norton"
      ]}, { title : "Pulp Fiction",
      writer : "Quentin Tarantino",
      year : 1994,
      actors : [
       "John Travolta",
       "Uma Thurman"
      ] }, { title : "Inglorious Basterds",
      writer : "Quentin Tarantino",
      year : 2009,
      actors : [
       "Brad Pitt",
       "Diane Kruger",
       "Eli Roth"
      ]},{
        title : "The Hobbit: An Unexpected Journey",
        writer : "J.R.R. Tolkein",
        year : 2012,
        franchise : "The Hobbit"
      },
      {
        title : "The Hobbit: The Desolation of Smaug",
        writer : "J.R.R. Tolkein",
        year : 2013,
        franchise : "The Hobbit"
      },
        {
            title : "The Hobbit: The Battle of the Five Armies",
            writer :"J.R.R. Tolkein",
            year : 2012,
            franchise : "The Hobbit",
            synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."},
        
        {
            title: "Pee Wee Herman's Big Adventure"
        },
        {tittle: "Avatar"}
        ]);
      console.log('Inserted documents =>', insertResult);
      // the following code examples can be pasted here...
  }