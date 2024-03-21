import express from"express";
import bodyParser from "body-parser";
import cors from "cors";
import ROUTES from './routes/routes.js'



const PORT = process.env.PORT || 4000;

const app = express()

//add middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Load routes
for (const item of ROUTES){
    app.use(item.routeName, item.routes)
}

// Start the server
app.listen(PORT,() => {
    console.log(`Server is running on port : ${PORT}`)
})