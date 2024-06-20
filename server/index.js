const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")

const cors = require("cors")
const router = require("./routes/user.route")


const PORT = process.env.PORT
const URI = process.env.URI



app.use(express.urlencoded({extended: true}))

app.use(cors(
    // {
    // origin: 'http://localhost:5173/'
// }
))


app.use(express.json())


app.use("/", router)

app.listen(PORT, () => {
    mongoose.connect(URI).then(() => {
        console.log(`app is running on port ${PORT} and Database connect`);
    }).catch((err) => {
        console.log("Database could not connect");
        console.log(err);
    })
})