/*
JS galimi ciklai ir 'cikliskos' funkcijos/metodai:

(funkcijos)
- for
- for-in
- for-or
- while
- do-while

(metodai)
- foreach
- map
- filter
- reduce
- sort
*/

const list = [1, -5, 78, 2, 11, -14, 0, -3];

// FOR
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei toia yra


for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(item);
}

console.clear();

// FOR-IN
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei toia yra

console.log(list);
for (const i in list) {
    const item = list[i];
    if (item > 0) {
        continue
    }
    console.log(i, item);
}

console.clear();

// FOR-OF
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei toia yra

for (const item of list) {
    if (item > 0) {
        continue;
    }
    console.log(item);
}

console.clear();

// WHILE
// break: nutraukia ciklo darba

let randomNumber = 0;
let randomNumberCount = 0;

while (randomNumber < 0.9) {
    randomNumber = Math.random();        // [0, 1)
    randomNumberCount++;
    console.log(randomNumberCount, randomNumber);
}

console.clear();

let i = 0;
while (i < list.length) {
    const item = list[i];
    if (item < -10) {
        break;
    }

    console.log(item);
    i++;
}

console.clear();

// DO-WHILE
// break: nutraukia ciklo darba

let dwi = 0;

do {
    console.log(dwi);
    if (dwi > 2) {
        break;
    }
    dwi++;
} while (dwi < 5)

console.clear();

// FOREACH

let FEsuma = 0;

list.forEach(n => FEsuma += n)

console.log(FEsuma);



const doubleList = [[1, 5], [8, 99], [ -8, -7, 15, 4], [3]];
let dlSuma = 0;

doubleList.forEach(innerList => innerList.forEach(n => dlSuma += n));

console.log(dlSuma);






console.clear();

// MAP
// map() metodas perejes per duota sarasa grazina tokio pacio dydzio sarasa, 

const mapList = [1, 2, 3, 4, 5, 6];
const forListSquare = [];

for (const num of mapList) {
    forListSquare.push(num * num);
}

console.log(forListSquare);

const mapListSquare = mapList.map(n => n*n);
console.log(mapListSquare);

/************************************/

console.clear();

// uzdavinys: visi neigiami skaiciai turi buti konvertuoti i nuli
const pazymiai = [10, -8, 2, -6, 8, -2];

const konvertuotiPazymiai = pazymiai.map(n => n < 0 ? 0 : n);
console.log(konvertuotiPazymiai);

const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];

const sveikieji = desimtainiai.map(n => Math.round(n));
console.log(desimtainiai);
console.log(sveikieji);





