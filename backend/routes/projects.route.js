import {Router} from "express"
import db from "../db/connection.js"
import { ObjectId } from "mongodb";

const router = Router()
const PROJECT_COLLECTION = db.collection('projects')

// Endpoint for getting a list of projects
router.get('/', async (req, res) => {
    let results = await PROJECT_COLLECTION.find({}).toArray();
    res.send(results).status(200);
});

//Endpoint for deleting all projects
router.delete('/', async(req, res) => {
    let result = await PROJECT_COLLECTION.deleteMany({});
    res.send(result).status(202);
}); 


// Endpoint for adding a single project
router.post('/', async(req, res) => {
    try {
        let newProject = {
            title: req.body.title,
            description: req.body.description,
            images: req.body.images,
            live_demo: req.body.live_demo
        }
        let result = await PROJECT_COLLECTION.insertOne(newProject);
        res.send(result).status(202);
    } catch (error) {
        console.error(error)
    }
});

// Endpoint for getting a single project by id
router.get('/:id', async (req, res) => {
    let query = {_id: new ObjectId(req.params.id)}
    let result = await PROJECT_COLLECTION.findOne(query)

    !result ? res.send("Not found!").status(404) : res.send(result).status(200);
});

// Endpoint for updating a project
router.patch('/:id', async(req, res) => {
    try {
        let query = {_id: new ObjectId(req.params.id)}
    let update = {
        $set: {
            title: req.body.title,
            description: req.body.description,
            images: req.body.images,
            live_demo: req.body.live_demo
        }
    }
    let result = await PROJECT_COLLECTION.updateOne(query, update);
    res.send(result).status(200);
    } catch (error) {
        console.error(error);
    }
    }
);

// Endpoint for deleting a project by id
router.delete('/:id', async(req, res) => {
    try {
        let query = {_id: new ObjectId(req.params.id)}
        let result = await PROJECT_COLLECTION.deleteOne(query);
        res.send(result).status(202);
    } catch (error) {
        console.error(error);
    }
});

export default router;