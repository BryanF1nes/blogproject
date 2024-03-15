require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// system variables
const PORT = process.env.PORT;

app.use(cors());
const indexRouter = require('./routes/index');

// mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.DB_URL;

main().catch((err) => console.log(err));
async function main() {
    console.log(`Mongoose Connection - Welcome Admin.`)
    await mongoose.connect(mongoDB);
}
app.use('/', indexRouter);


app.listen(PORT, (req, res) => {
    console.log(`Server running on ${PORT}`)
})