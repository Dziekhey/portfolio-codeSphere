import {Router} from "express"
import db from "../db/connection.js"
import { ObjectId } from "mongodb";
import multer from 'multer';

const mediaUpload = multer({dest: 'uploads', limits: {
    fileSize: 10000000, 
},
fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(mp4|MPEG-4|mkv|png|jpeg|jpg|svg)$/)) {
        return cb(new Error("Please upload a video or an image"));
      }
      cb(undefined, true);  
} 
});

const router = Router()
const BLOGS_COLLECTION = db.collection('blogs')

// Endpoint for getting list of skills
router.get('/', async(req, res) => {
    let results = await BLOGS_COLLECTION.find({}).toArray();
    res.send(results).status(200);
});

// Endpoint for adding a single skill
router.post('/', mediaUpload.single('image'), async(req, res) => {
    try {
        let newBlogs = {
            title: req.body.title,
            summary: req.body.summary,
            image: req.body.image,
            link: req.body.link
        }
        let result = await SKILLS_COLLECTION.insertOne(newBlogs);
        res.send(result).status(201);
    } catch (error) {
        console.error(error);
    }
    });

    // Endpoint for getting a single skill by id
router.get('/:id', async(req, res) => {
    let query = {_id: new ObjectId(req.params.id)}
    let result = await BLOGS_COLLECTION.findOne(query)

    if(!result) res.send("Not found!").status(404);
    else res.send(result).status(200);

    // !results ? res.send("Not found!").status(404) : res.send(results).status(200);
});

// Endpoint for updating a skill
router.patch('/:id', async(req, res) => {
    try {
       const query = {_id: new ObjectId(req.params.id)} 
       const update = {
        $set: {
            title: req.body.title,
            summary: req.body.summary,
            content: req.body.content,
            body_image: req.body.body_image,
            cover_image: req.body.cover_image
        }
       }
       let result = await BLOGS_COLLECTION.updateOne(query, update);
       res.send(result).status(202);
    } catch (error) {
        console.error(error);
    }
});

// Endpoint for deleting a single skill by id
router.delete('/:id', async(req, res) => {
    try {
        const query = {_id: new ObjectId(req.params.id)};
        let result = await BLOGS_COLLECTION.deleteOne(query);
    res.send(result).status(202);
    } catch (error) {
        console.error(error);
    }
});

export default router;