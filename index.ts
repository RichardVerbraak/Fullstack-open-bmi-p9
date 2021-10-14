import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('ping')
})

const PORT = 3003

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})