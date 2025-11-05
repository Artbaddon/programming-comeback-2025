// Exercise 1: Data Transformation
// javascript
// Given this array of products
const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'electronics', inStock: true },
    { id: 2, name: 'Phone', price: 599, category: 'electronics', inStock: false },
    { id: 3, name: 'Desk', price: 299, category: 'furniture', inStock: true },
    { id: 4, name: 'Chair', price: 149, category: 'furniture', inStock: true },
    { id: 5, name: 'Book', price: 19, category: 'education', inStock: false }
];

// Task: Create an array of product names that are in stock and cost more than $100
// Expected output: ['Laptop', 'Desk', 'Chair']
// Exercise 2: Statistical Analysis
// javascript
const filteredArr = products.filter((value) => value.price > 100).map((item) => item.name);


const sales = [1250, 890, 2100, 150, 750, 3200, 480, 1650];

// Tasks:
// 1. Find the total sales (sum)
// 2. Find the average sale
// 3. Find the highest and lowest sales
// 4. Count how many sales were above $1000
const totalSales = sales.reduce((a, b) => a + b);
console.log(totalSales);
const averageSale = totalSales / sales.length;
console.log(averageSale);
sales.sort((a, b) => a - b);
const highestSale = sales[sales.length-1];
console.log(highestSale);
const lowestSale = sales[0];
console.log(lowestSale);

const salesMoreThan1k = sales.filter((item)=> item>1000)
console.log(salesMoreThan1k.length);
// Exercise 3: Complex Data Manipulation
// javascript
