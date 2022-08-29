// // /d let's Explore the digit character class first
// let phone ='+1-(970)-3502-945';
// let re = /\d/;

// console.log(phone.match(re));



// // /g add the globalflag the result will search for all numbers ,not the first one 

// let phone ='+1-(970)-3502-945';
// let re = /\d/g;

// console.log(phone.match(re));


// use match()

// let phone ='+1-(970)-3502-945';
// let re = /\d/g;
// let numbers = phone.match(re);
// let phoneNo = numbers.join('')

// console.log(phoneNo);


//  \w\d matches 
let str = 'O2 is oxygen';
let re = /\w\d/g;

console.log(str.match(re)); 