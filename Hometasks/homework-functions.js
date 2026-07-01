function DiceGame(a,b) {

const PlayersCount = a
const TrowhsCount = b
const GameResults = []
const ThrowhsResults = []
let MaxScore = 0
let Winners = []
    for (let i = 0; i < PlayersCount; i++) {
        for (let j = 0; j < TrowhsCount; j++) {
            const DiceResult = Math.floor(Math.random() * 6) + 1
            GameResults[i] = DiceResult + (GameResults[i] || 0)
            ThrowhsResults[j] = DiceResult
            }
            if (GameResults[i] > MaxScore) {
                MaxScore = GameResults[i]
                Winners = [i + 1]
            } 
            else if (GameResults[i] === MaxScore) {
                Winners.push(i + 1)
            }
        console.log(`Player ${i + 1} | Throw results: ${ThrowhsResults.join(', ')} | Total score: ${GameResults[i]}`)
    }
    if (Winners.length === 1) {
        console.log(`Winner is Player ${Winners[0]} with score ${MaxScore}`)
}   
    else { 
        console.log(`Draw! Players ${Winners.join(', ')} with same score ${MaxScore}`)
}
}

DiceGame(5, 2)



console.log('-'.repeat(30))



function SplitNumberRandom(a,b) {

const NumberToSplit = a
const SplitPartsCount = b
const SplitParts = []
let RemainingNumber = NumberToSplit
let UniqueParts = SplitPartsCount

    for (let i = 1; i < SplitPartsCount; i++) {
        const MaxPart = RemainingNumber - (SplitPartsCount - 1 - i)
        const RandomPart = Math.floor(Math.random() * (MaxPart - 1)) + 1
        SplitParts.push(RandomPart)
        RemainingNumber -= RandomPart
    }

SplitParts.push(RemainingNumber)

console.log(`Random split of ${NumberToSplit} into ${SplitPartsCount} parts: ${SplitParts.join(', ')}`)
console.log(`Sum of parts: ${SplitParts.reduce((a, b) => a + b, 0)}`)

}

SplitNumberRandom(45, 6)



console.log('-'.repeat(30))



function countFridayThe13ths(startDate, endDate) {
    
let current = new Date(startDate);
let end = new Date(endDate);

if (isNaN(current.getTime()) || isNaN(end.getTime())) {
    console.error("Error: Invalid date format. Please use 'YYYY-MM-DD'.");
    return;
}

let count = 0
const datesList = []

while (current <= end) {
     if (current.getDate() === 13 && current.getDay() === 5) {
        count++;
        datesList.push(new Date(current))
     }
        
     current.setDate(current.getDate() + 1)
}

console.log(`Total Friday 13th count: ${count}`)
console.log("List of found dates:")
datesList.forEach(date => console.log(date.toLocaleDateString('ru-Ru')))
    
return { count, datesList }

}

countFridayThe13ths('2000-01-01', '2026-07-01')