import express from 'express'
const app = express()

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
    const height = req.query.height
    const weight = req.query.weight

    res.status(200)
    res.json({
        weight,
        height,
        bmi: "Normal (Healthy weight)"
    })
})

const PORT = 3002

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})