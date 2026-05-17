import express from 'express'
import cors from "cors"
import dotenv from "dotenv/config"

// App Config 
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => console.log(`Server started on ${port}`));