/*

FOR LOOP (ciklas)

for () {}

*/

const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0;

zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];

console.log(zodis);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log('ciklo pabaiga');

console.log('----------------------');

const marks = [5, 7, 10, 4, 2, 10];


for (let i = 0; i < 6; i++) {
    console.log(marks[i]);
}