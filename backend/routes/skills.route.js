import { Router } from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";


const router = Router();
const SKILLS_COLLECTION = db.collection("skills");

// Endpoint for getting list of skills
router.get("/", async (req, res, next) => {
  try {
    let results = await SKILLS_COLLECTION.find({}).toArray();
    res.send(results).status(200);
  } catch (error) {
    next(error)
  }
});

// Endpoint for adding a single skill
router.post("/", async (req, res, next) => {
  try {
    let newSkill = {
      type: req.body.type,
      skill: req.body.skill,
      proficiency: req.body.proficiency,
      user_id: req.body.user_id,
    };
    let result = await SKILLS_COLLECTION.insertOne(newSkill);
    res.send(result).status(201);
  } catch (error) {
    next(error);
  }
});

// Endpoint for getting a single skill by id
// router.get('/:id', async(req, res) => {
//     let query = {_id: new ObjectId(req.params.id)}
//     let result = await SKILLS_COLLECTION.findOne(query)

//     if(!result) res.send("Not found!").status(404);
//     else res.send(result).status(200);

//     // !results ? res.send("Not found!").status(404) : res.send(results).status(200);
// });

// Endpoint for getting a single skill by user_id
router.get("/:user_id", async (req, res, next) => {
  try {
    let query = { user_id: req.params.user_id };
    let results = await SKILLS_COLLECTION.find(query).toArray();
  
    if (!results) res.send("Not found!").status(404);
    else res.send(results).status(200);
  } catch (error) {
    next(error);
  }

  // !results ? res.send("Not found!").status(404) : res.send(results).status(200);
});

// Endpoint for updating a skill
router.patch("/:id", async (req, res, next) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const update = {
      $set: {
        type: req.body.type,
        skill: req.body.skill,
        proficiency: req.body.proficiency,
        user_id: req.body.user_id,
      },
    };
    let result = await SKILLS_COLLECTION.updateOne(query, update);
    res.send(result).status(202);
  } catch (error) {
    next(error);
  }
});

// Endpoint for deleting a single skill by id
router.delete("/:id", async (req, res, next) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    let result = await SKILLS_COLLECTION.deleteOne(query);
    res.send(result).status(202);
  } catch (error) {
    next(error);
  }
});

export default router;
