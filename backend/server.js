import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';

import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('GET request to homepage')
})

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

import exercisesRoute from './routes/exercises'
import usersRoute from  './routes/users'

app.use('/exercises', exercisesRoute)
app.use('/users', usersRoute)


app.listen(port, () => {
    console.log(`Server is running  on port: ${port}`)
})