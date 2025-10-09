const n = 400

const balance = new Number(400)

// console.log(n);
// console.log(balance);

// console.log(balance.toString());

const piValue = Math.PI
// console.log(piValue);

// console.log(piValue.toPrecision(4));

const netWorth = {name:"Jeff Bezos", netWorthUSD:234500000000}

// console.log(`Net Worth of ${netWorth.name} is $${netWorth.netWorthUSD.toLocaleString()}`);
// console.log(`Net Worth of ${netWorth.name} is $${netWorth.netWorthUSD.toLocaleString('en-IN')}`);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// +++++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math);
// console.log(Math.min(2,3,4,5));
// console.log(Math.max(2,3,4,5));

// Random number 1-10
// console.log(Math.floor((Math.random() * 10) + 1));

const min = 10
const max = 25

console.log(Math.floor((Math.random() * (max - min + 1)) + min));
