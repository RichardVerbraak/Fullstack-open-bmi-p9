// Commented out code for using it with CLI args

// interface bmiDetails {
//     value1: number,
//     value2: number
// }

// const checkArguments = (args: Array<string>) : bmiDetails => {
//     if(args.length > 4) throw new Error('Too many arguments passed in')
//     if(args.length < 4) throw new Error('Too few arguments passed in')

//     if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//         return {
//             value1: Number(args[2]),
//             value2: Number(args[3])
//         }
//     } else {
//         throw new Error('Input should be all numbers!')
//     }
// }

// const {value1, value2} = checkArguments(process.argv)

// console.log(calculateBmi(value1, value2))

const calculateBmi = (height: number, weight: number) : string => {
    const BMI = weight / Math.pow(height / 100, 2);

    let message = '';    

    if(BMI <= 18.4) message = 'Underweight';
    if(BMI >= 18.5 && BMI <= 24.9)  message = 'Normal';
    if(BMI >= 25.0 && BMI <= 29.9) message = 'Overweight';
    if(BMI >= 30.0)  message = 'Obese';

    return message;
};

export { calculateBmi };

