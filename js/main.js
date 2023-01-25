//task 1
const arr = ['Start', 2, 4, 6, 8, 12, 16, 24, 'Finish'];
let numOnlyArr = arr.slice(1, 8);
console.log(numOnlyArr);
let sum = 0;    
numOnlyArr.forEach((num) => { sum += num });
average = sum / arr.length;
console.log(average);
//task2
function doMath(x, znak, y){
    if (znak.search() || znak.length !==1) return 'False';
    return eval(x + znak.replace('^', '**') + y)
}
const x = prompt('enter num');
const y = prompt('enter num');
const znak = prompt('enter operator');
console.log(doMath(x, znak, y));
//task3
function arrAdd() {
    let arr = [];
    let amount = +prompt("enter your amount of arrays");

    for(let i = 0; i < amount; i++) {
        arr.push([]);

        let amount2 = prompt("enter your amount of elements in array" + (i + 1));

        for(let j = 0; j < amount2; j++) {
            let elem = prompt("enter your text" + (j + 1));
            arr[i].push([elem]);
        }
    }

    console.log(arr);
}

let functionResult = arrAdd();
//Task 4
let str = '2 be or not 2 be? That is the question';
console.log(str.replace(/(e)|(o)|(a)|(i)|(u)/g, ''));
