import express from 'express';
import { calculateBmi } from './calculateBmi';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight); 

    if(!height || !weight) {
        res.status(400);
        res.json({
            error: "missing params"
        });
    }

    if(isNaN(height) || isNaN(weight)) {
        res.status(400);
        res.json({
            error: "malformatted params"
        });
    }

    res.status(200);
    res.json({
        weight,
        height,
        bmi: calculateBmi(height, weight)
    });
});


app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const daily_exercises : Array<number> = req.body.daily_exercises;
    const target = Number(req.body.target);

    if(!daily_exercises || !target) {
        res.status(404);
        res.json({error: "missing parameters"});
    }

    if(!Array.isArray(daily_exercises) || isNaN(target)) {
        res.status(400);
        res.json({error: "malformatted parameters"});
    }
   

    const result = calculateExercises(daily_exercises, target);

    res.status(200);
    res.json(result);
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});