import express from 'express'
import { calculateBmi } from './calculateBmi'

const app = express()

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height)
    const weight = Number(req.query.weight)   

    if(!height || !weight) {
        res.status(400)
        res.json({
            error: "missing params"
        })
    }

    if(isNaN(height) || isNaN(weight)) {
        res.status(400)
        res.json({
            error: "malformatted params"
        })
    }

    res.status(200)
    res.json({
        weight,
        height,
        bmi: calculateBmi(height, weight)
    })
})

const PORT = 3002

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})