type Message = String

const calculateBmi = (height: number, weight: number) : string => {
    const BMI = weight / Math.pow(height / 100, 2)

    console.log(typeof BMI)

    if(BMI <= 18.4) return 'Underweight'
    if(BMI >= 18.5 && BMI <= 24.9) return 'Normal'
    if(BMI >= 25.0 && BMI <= 29.9) return 'Overweight'
    if(BMI >= 30.0) return 'Obese'
}

console.log(calculateBmi(180, 300))
