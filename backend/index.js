import express from"express";
import bodyParser from "body-parser";
import cors from "cors";
import skills from "./routes/skills.route.js"
import projects from './routes/projects.route.js'
import experiences from './routes/experiences.route.js'
import achievements from './routes/achievements.route.js'
import blogs from './routes/blogs.route.js'


const PORT = process.env.PORT || 4000;

const app = express()

//add middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Load routes
app.use('/skills', skills);
app.use('/projects', projects);
app.use('/experiences', experiences);
app.use('/achievements', achievements);
app.use('/blogs', blogs);

// Start the server
app.listen(PORT,() => {
    console.log(`Server is running on port : ${PORT}`)
})