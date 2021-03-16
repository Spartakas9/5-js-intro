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

const zmones = ['Petras', 'Maryte', 'Jonas', 'Onute', 'Elvyra'];

for ( let i = 0; i<zmones.length; i++) {
    const asmuo = zmones[i];

    console.log(asmuo);
}

console.log('----------------------');

const marks = [5, 7, 10, 4, 2, 10, 8, 9, 1, 3];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    const pazymys = marks[i];
    sum += pazymys;
}

const average = sum / marks.length;

console.log(sum, '/', marks.length, '=', average);

console.log('----------------------');

