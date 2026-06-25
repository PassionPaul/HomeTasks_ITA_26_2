function FormatToCurrency(StringNumbers) {

return StringNumbers.map((Str) => {
    if (typeof Str !== 'string') {
    return 'Error: await for data'
    }
        
const Trimmed = Str.trim()

    if (Trimmed === '') {
    return 'Error: empty string'
    }

const ParsedToNumber = parseFloat(Trimmed.replace(',', '.'))

    if (isNaN(ParsedToNumber)) {
    return `Error: '${Str}' not a number`
    }

    try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      }).format(ParsedToNumber)
    } 
    catch (error) {
    return `Error: cannot format '${Str}'`
    }

})

}

const Input = ['1234', '6547,5', 'thisisnotanumber', '', '99.985','+']
const Output = FormatToCurrency(Input)
console.log(Output)



console.log('-'.repeat(30))



function FilterAndSortDescending(arr) {
    return arr
    .filter(Boolean)
    .sort((a, b) => b - a)
}

const MixedArray = [0, 10, NaN, 5, '', 8, null, 'kyky', null, 6]
const Filtered = FilterAndSortDescending(MixedArray)
console.log(Filtered)






function GroupByNameByAge(People) {
    return People.reduce((acc, { Name, Age }) => {
        acc[Age] = acc[Age] || []
        acc[Age].push(Name)
        return acc
    }, {})

}

const People = [
    { Name: 'Alex', Age: 25 },
    { Name: 'Ivan', Age: 30 },
    { Name: 'Mary', Age: 25 },
    { Name: 'Zmitser', Age: 30 },
    { Name: 'Helga', Age: 35 }
];

console.log(GroupByNameByAge(People))



console.log('-'.repeat(30))



async function ExecutePromisesInParallel(FunctionsArray) {
    const Promises = FunctionsArray.map(Resolve => Resolve())
    const PromisesResult = await Promise.all(Promises)
        console.log(PromisesResult)
        console.log('-'.repeat(30))
}

const Fn1 = () => new Promise(Resolve => setTimeout(() => Resolve('Result 1'), 100))
const Fn2 = () => new Promise(Resolve => setTimeout(() => Resolve('Result 2'), 1000))
const Fn3 = () => new Promise(Resolve => setTimeout(() => Resolve('Result 3'), 300))

ExecutePromisesInParallel([Fn1, Fn2, Fn3])






function PrintMultiplicationTable(N) {

const Table = []
const RowSumm = Array(N).fill(0)
const ColSumm = Array(N).fill(0)
let TotalSumm = 0
  
if (Number.isInteger(N) && N >= 1) {
    for (let i = 1; i <= N; i++) {
        const Row = [];
        for (let j =1; j<= N; j++) {
            const Result = i * j
            Row.push(Result)
            RowSumm[i - 1] += Result
            ColSumm[j - 1] += Result
            TotalSumm += Result
        }
    Table.push(Row)
    }  

const TableLenght = (N * N).toString().length + 3
let Output = ''
let Header = ' '.repeat(TableLenght)
    for (let i = 1; i <= N; i++) {
         Header += i.toString().padStart(TableLenght, ' ')
    }

Output += Header + '\n' + '_'.repeat(Header.length) + '\n'

    for (let i = 0; i < N; i++) {
        let NumStr = (i + 1 + ' |').toString().padStart(TableLenght, ' ')
        for (let j = 0; j < N; j++) {
            NumStr += Table[i][j].toString().padStart(TableLenght, ' ')
        }
    Output += NumStr + '\n'
    }

console.log(Output)
console.log('Sum in rows:', RowSumm.join(', '))
console.log('Sum in columns:', ColSumm.join(', '))
console.log('Sum of table:', TotalSumm.toString())
}

else{
    console.log('Number must be integer, and equal or higher than 1')
}

}

PrintMultiplicationTable(9)



console.log('-'.repeat(30))



const FirstPromise = new Promise((Resolve) => {Resolve(8)});
FirstPromise
    .then((Result) => {
        return new Promise((Resolve) => {
            setTimeout(() => {
            Resolve(Result * Result);
                }, 1000);
        });
    })
    .then((Result) => {
         return new Promise((Resolve) => {
            setTimeout(() => {
            Resolve(Result * Result);
                }, 1000);
        });
    })
    .then((FinalResult) => {
    console.log("FinalResult:", FinalResult); 
});