require('dotenv').config();
require('./db/connect')
const cors = require('cors')
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const route = require('./routes/router');
const PORT = process.env.PORT || 8000


const corsOption = {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Set-Cookie', 'Token']
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(route)

 
app.listen(PORT, () => {
    console.log("server is running...");
})