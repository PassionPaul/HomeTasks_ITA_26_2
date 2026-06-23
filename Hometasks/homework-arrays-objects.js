const numbers = [1, 2, 3, 4, 5, 6]
const revnumbers = numbers.toReversed()
console.log(revnumbers)



console.log('-'.repeat(30))



const MinMaxNumbers = [3, 67, 15, 89, 24, 7, 101, 36]
const min = Math.min(...MinMaxNumbers)
const max = Math.max(...MinMaxNumbers)

console.log('Min:', min)
console.log('Max:', max)

console.log('-'.repeat(15))

let cyclemin = MinMaxNumbers[0]
let cyclemax = MinMaxNumbers[0]

for (let i = 1; i < MinMaxNumbers.length; i++) {
    if (MinMaxNumbers[i] <= cyclemin) {
        cyclemin = MinMaxNumbers[i];
    }
    else if (MinMaxNumbers[i] >= cyclemax) {
        cyclemax = MinMaxNumbers[i];
    }
}

console.log('Min:', cyclemin);
console.log('Max:', cyclemax);



console.log('-'.repeat(30))



let FiboArray = [0,1]
let FiboStartIndex = 8
let FiboLength = 10

for (let i = 2; i < FiboStartIndex + FiboLength; i++) {
    FiboArray.push(FiboArray[i - 1] + FiboArray[i - 2])
}       
console.log(FiboArray.slice(FiboStartIndex, FiboStartIndex + FiboLength))



console.log('-'.repeat(30))



const secret = 5613   
const guess = 1563

let SecretArr = String(secret).split('')
let GuessArr = String(guess).split('')

let bulls = 0
let cows = 0     

for (let i = 0; i < SecretArr.length; i++) {
    if (SecretArr[i] === GuessArr[i]) {
        bulls++
    }
     else if (GuessArr.includes(SecretArr[i])) {
        cows++
    }
}

console.log('Bulls:', bulls)
console.log('Cows:', cows)



console.log('-'.repeat(30))


const users = [
  { name: "Alex", age: 25, city: "Warsaw" },
  { name: "Maria", age: 32, city: "Gdansk" },
  { name: "John", age: 19, city: "Berlin" },
  { name: "Oleg", age: 41, city: "Warsaw" },
  { name: "Anna", age: 25, city: "Krakow" }
];

const UsersByAgeAsc = users.sort((a, b) => a.age - b.age);
console.log('Sorted users by age ascending:', UsersByAgeAsc);

console.log('-'.repeat(15))

const UsersByAgeDesc = users.sort((a, b) => b.age - a.age);
console.log('Sorted users by age descending:', UsersByAgeDesc);

console.log('-'.repeat(15))

const UsersByNames = users.sort((a, b) => a.name.localeCompare(b.name));
console.log('Users sorted by name:', UsersByNames);

console.log('-'.repeat(15))

const UsersNames = users.map(user => user.name)
console.log('Users names:', UsersNames);

console.log('-'.repeat(15))

const Users25Up = users.filter(user => user.age > 25);
console.log('Users 25 and up:', Users25Up);

console.log('-'.repeat(15))

const UserFromWarsaw = users.find(user => user.city === 'Warsaw')
console.log('First user from Warsaw is', UserFromWarsaw.name)



console.log('-'.repeat(30))



const products = [
  { id: 1, title: "Phone", price: 1200, category: "electronics" },
  { id: 2, title: "Laptop", price: 2500, category: "electronics" },
  { id: 3, title: "Book", price: 40, category: "books" },
  { id: 4, title: "Phone", price: 1200, category: "electronics" },
  { id: 5, title: "Pen", price: 5, category: "stationery" },
  { id: 6, title: "Book", price: 40, category: "books" }
];

const FilteredProducts = Array.from(
new Map(products.map(product => [product.title, product]&&[product.price, product])).values())
console.log(FilteredProducts)

/*const FilteredProducts = products.filter((product, index, self) => index === self.findIndex((i) =>
    i.title === product.title &&
    i.price === product.price)
)
console.log("Filtered products:", FilteredProducts)*/

console.log('-'.repeat(15))

const ProductsTitles = FilteredProducts.map(product => product.title)
console.log('Products titles:', ProductsTitles)

console.log('-'.repeat(15))

const ProductsCategories = [...new Set(products.map(product => product.category))]
console.log('Products categories', ProductsCategories)

console.log('-'.repeat(15))

const PriceOfUnique = FilteredProducts.reduce((price, product) => price + product.price, 0)
console.log('Price of unique products', PriceOfUnique)

console.log('-'.repeat(15))

const QuantityInCategoties = FilteredProducts.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0 ) + 1;
    return acc;
},{})
console.log('Quantity in categoties:', QuantityInCategoties)

console.log('-'.repeat(15))

console.log(Object.keys(FilteredProducts[0]))
console.log(Object.values(FilteredProducts[0]))
console.log(Object.entries(FilteredProducts[0]))