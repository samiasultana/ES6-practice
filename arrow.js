// 1. single parameter
const doubleIt = num => num * 2;
const result = doubleIt(12);
console.log(result);

// arrow er porer tuku return er shortcut

// 2. more than 1 parameter
const add = (x, y) => (x + y);
const result2 = add(12, 23);
console.log(result2);

// 3. no parameter
const give5 = () => 5;
const result3 = give5();
console.log(result3);


// 4. bishal calculation er jonno vitore return likhte hobe
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result4 = doMath(3, 5);
console.log(result4);