function get_n_sum(n) {
    let total = 0, count = 1;

    while (count <= n)
    {
        total += count;
        count++;
    }

    return total;
}

function factorial(n){
    if (n === 0)
        return 1;
    else {
        return factorial(n-1) * n;
    }
}

sum = get_n_sum(10);
console.log(sum);

product = factorial(8);
console.log(product);

//Number(), String(), Boolean(), covert a value to that type
//prompt is not defined in node.js
//conditional execution of code branches
// let n = Number(prompt("Enter a number"));
// if (!Number.isNaN(n)){
//     console.log(`The square of ${n} is ${n*n}`);
//     console.log(`${n} is the square root of ${n*n}`);
// }
// else {
//     console.log("Hey, why didn't you give me a number?");
// }

//chaining conditions
// let n = Number(prompt("Enter a number: "));

// if (n < 10){
//     console.log(`${n} is a small number.`);
// } else if (n < 100) {
//     console.log(`${n} is a medium number.`);
// } else {
//     console.log(`${n} is a large number.`);
// }

//print even numbers with while(test_expression)
//each loop iteration runs with a updated state
//counter binding is created to track the progress of the loop
//text expression evaluated if counter has reached it's end value
//add the end of the loop body, the counter is updated to track progress
let counter = 0;

while (counter <= 12) {
    console.log(counter);
    counter += 2;
}

let result = 1, counter2 = 0;

while (counter2 < 10) {
    result *= 2;
    counter2++;
}

console.log("Result: ", result);

//let yourName;

//do {
    // every non-empty string evaluates to true
    // ! will convert a string to boolean before evaluation
    //yourName = prompt("Who are you?");
//} while (!yourName);

//console.log(yourName);

//(;;) -- first:loop initializer, usually by defining a binding
// second: test condition, third: updates the state of the binding after each loop execution
// may be shorter and clearer than a while construct
for (let i = 0; i <=12; i+= 2) {
    console.log("Index:", i);
}

//compute 2^10
let c_result = 1;
for (let i = 0; i < 10;i++) {
    c_result *= 2;
}
console.log(c_result);

//break keyword stops loop execution
//before loop condition evaluated to false
//no test condition in the loop below
//will execute forever if break not called
for (let current = 20;;current++) {
    if (current % 7 === 0) {
        console.log("Current:", current);
        break;
    }
}
//continue keyord exits current loop interation and returns to loop condition
//break and continue determine loop progress
//shortcuts to update bindings succinctly: +=,-+,*=,++,--