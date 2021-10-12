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
    const ratingDescription = targetRating === 1 ? 'pretty bad' : targetRating === 2 ? 'not too great' : 'well done'

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

const week1 = [3, 0, 2, 4.5, 0, 3, 1]

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))