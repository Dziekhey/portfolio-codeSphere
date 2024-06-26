import { MongoClient} from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri);

const DATABASE_NAME = 'team_db';

try {
    await client.connect();

    await client.db('admin').command({ping: 1});
    console.log("You've successfully connected to Mongodb")
} catch (error) {
   console.log(error); 
}

let db = client.db(DATABASE_NAME);

export default db;