const express = require('express');
require('colors');
const connectDB = require('./connectDB');
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });

const app = express();

app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`.green.bold);
})