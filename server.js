const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());

//middleware here for checking token

//api use here

//protected routes here

//defining port and listen

const PORT = process.env.PORT;

app.listen(PORT, function() {
    console.log(`Backend started on port ${PORT}`)
});