//optimal weight for men and women. Equal to their height for men (minus 100), -5 kilos of their height for women

const readlineSync = require('readline-sync');

let gender = readlineSync.question('What is your sex? (m/f) ');

if (gender !== "m" && gender !== "f") {
    console.log("Invalid parameter");
    process.exit(0);
}

let height = readlineSync.question('What is your height? (in cm) ');

height = parseInt(height);

if (isNaN(height)) {
    console.log('Invalid input');
    process.exit(0);
}

console.log('Your height is ' + height + 'cm')