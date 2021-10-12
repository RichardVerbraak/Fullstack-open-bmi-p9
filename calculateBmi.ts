interface bmiDetails {
    value1: number,
    value2: number
}

const checkArguments = (args: Array<string>) : bmiDetails => {
    if(args.length > 4) throw new Error('Too many arguments passed in')
    if(args.length < 4) throw new Error('Too few arguments passed in')

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    } else {
        throw new Error('Input should be all numbers!')
    }
}

const {value1, value2} = checkArguments(process.argv)

const calculateBmi = (height: number, weight: number) : string => {
    const BMI = weight / Math.pow(height / 100, 2)

    if(BMI <= 18.4) return `${height} ${weight} Underweight`
    if(BMI >= 18.5 && BMI <= 24.9) return `${height} ${weight} Normal`
    if(BMI >= 25.0 && BMI <= 29.9) return `${height} ${weight} Overweight`
    if(BMI >= 30.0) return `${height} ${weight} Obese`
}

console.log(calculateBmi(value1, value2))

