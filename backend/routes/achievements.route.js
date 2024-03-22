import {Router} from "express"
import db from "../db/connection.js"
import { ObjectId } from "mongodb";

const router = Router()
const ACHIEVEMENTS_COLLECTION = db.collection('achievements')

// Endpoint for getting list of achievements
router.get('/', async(req, res) => {
    let results = await ACHIEVEMENTS_COLLECTION.find({}).toArray();
    res.send(results).status(200);
});

// Endpoint for adding a single achievement
router.post('/', async(req, res) => {
    try {
        let newAchievement = {
            type: req.body.type,
            title: req.body.title,
            description: req.body.description,
            certificate: req.body.certificate,
        }
        let result = await ACHIEVEMENTS_COLLECTION.insertOne(newAchievement);
        res.send(result).status(201);
    } catch (error) {
        console.error(error);
    }
    });

    // Endpoint for getting a single achievement by id
router.get('/:id', async(req, res) => {
    let query = {_id: new ObjectId(req.params.id)}
    let result = await ACHIEVEMENTS_COLLECTION.findOne(query)

    !result ? res.send("Not found!").status(404) : res.send(result).status(200);
});

// Endpoint for updating an achievement
router.patch('/:id', async(req, res) => {
    try {
       const query = {_id: new ObjectId(req.params.id)} 
       const update = {
        $set: {
            type: req.body.type,
            title: req.body.title,
            description: req.body.description,
            certificate: req.body.certificate,
        }
       }
       let result = await ACHIEVEMENTS_COLLECTION.updateOne(query, update);
       res.send(result).status(202);
    } catch (error) {
        console.error(error);
    }
});

// Endpoint for deleting a single achievement by id
router.delete('/:id', async(req, res) => {
    try {
        const query = {_id: new ObjectId(req.params.id)};
        let result = await ACHIEVEMENTS_COLLECTION.deleteOne(query);
    res.send(result).status(202);
    } catch (error) {
        console.error(error);
    }
});

export default router;