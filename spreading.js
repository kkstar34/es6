const tab = [1, 2, 3, 4, 5];


// console.log(...tab);

const tab2 = [...tab, 18];

// console.log(tab2);

function addition(a, b, c, d, e) {
    return a + b + c + d + e;
}


console.log(addition(...tab));//
// console.log(addition(...tab));


console.log(Math.min(...[2, 8, 1, 17]));