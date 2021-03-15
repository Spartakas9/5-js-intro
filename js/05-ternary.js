/*

TERNARY OPERATOR: ? (klaustukas)

Palyginimas ? ka daryti jei tenkina logika : ka daryti jei logikos netenkita

palyginimas ? true : false

*/

const a = 8;
const b = 7;

let ats = '';

if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'ne daugiau';
}

console.log(ats);


const c = 8;
const d = 5;

const ats2 = c > d ? 'daugiau' : 'ne daugiau';

console.log(ats2);