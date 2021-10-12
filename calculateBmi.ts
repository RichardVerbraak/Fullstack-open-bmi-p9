const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])

const calculateBmi = (height: number, weight: number) : string => {
    const BMI = weight / Math.pow(height / 100, 2)

    if(BMI <= 18.4) return 'Underweight'
    if(BMI >= 18.5 && BMI <= 24.9) return 'Normal'
    if(BMI >= 25.0 && BMI <= 29.9) return 'Overweight'
    if(BMI >= 30.0) return 'Obese'
}

console.log(calculateBmi(height, weight))

