// Model of object that's being returned
interface CalculationValues {
    days: number,
    trainingDays: number,
    targetHours: number,
    averageHours: number,
    success: boolean,
    targetRating: number,
    ratingDescription: string
}

interface CalculationArgs {
    target: number,
    hours: Array<number>
}

const validateArgs = (args: Array<string>) : CalculationArgs => {
    if(args.length < 4) throw new Error('Too few arguments, please pass in more than 1')

    // Remove first 3 elements returned from process.argv -- first two being related to the directory and the last being the target hours
    const slicedArray = args.splice(0, 3)
    const target = Number(slicedArray[2])

    // Error if target is not a number
    if(isNaN(target)) throw new Error('Please input a number')
        
    // Map strings to numbers
    const hours = args.map((hour) => {
        return Number(hour)
    })

    // Check if everything is a number
    const allNumbers = hours.every((hour) => {
        return !isNaN(hour)
    })    

    // Error if not all numbers
    if(!allNumbers) throw new Error('Please input only numbers') 
    
    const normalHours = hours.every((hour) => {
        return hour <= 24
    })

    if(!normalHours || target > 24) throw new Error('A day only has 24 hours!')

    return {
        target,
        hours
    }
}


const {target, hours} = validateArgs(process.argv)

const calculateExercises = (hours: Array<number>, target: number) : CalculationValues => {
    // Amount of days
    const days = hours.length
    
    // Amount of days trained
    const trainingDays = hours.reduce((prev, current) => {
        return current > 0 ? prev + current : 0
    }, 0)

    // Target for days trained
    const targetHours = target

    // Average training time
    const allHours = hours.reduce((prev, current) => {
        return prev + current
    }, 0)
    const averageHours = allHours / days

    // Target met
    const success = averageHours >= targetHours ? true : false

    // Rating based on target
    const targetRating = averageHours < targetHours - 1 ? 1 : averageHours > targetHours + 1 ? 3 : 2

    // Message for rating
    const ratingDescription = targetRating === 1 ? 'pretty bad' 
    : targetRating === 2 ? 'not too great' 
    : 'well done'

    return {
        days,
        trainingDays,
        targetHours,
        averageHours,
        success,
        targetRating,
        ratingDescription
    }
}

console.log(calculateExercises(hours, target))