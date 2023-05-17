import express from 'express'
import dotenv from 'dotenv'

//server
const app = express() 
const PORT = process.env.PORT || 5000 
const router = express.Router()
dotenv.config()

//middlewares
app.use(express.json())

// routes 
router.get('/name/:id', async (req,res) => {
    const {id} = req.params 
    return res.send(`My name is ${id}`) 
})

router.get('/title', async(req,res) => {
    res.send('The server title is working')
})

// app.use(router)

app.listen(PORT, () => {console.log(`Server is running on port : ${PORT}`)})