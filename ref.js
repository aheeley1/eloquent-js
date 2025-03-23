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
//let n = Number(prompt("Enter a number"));
//console.log(`The square of ${n} is ${n*n}`);