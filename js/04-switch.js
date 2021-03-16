/*

SWITCH STATEMENT:

switch () { case, break, default }

*/

const animal = 'cat';

switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;

    case 'cat':
        console.log('Meow meow');
        break;

    default:
        console.log('Unknow animal');
        break;
}

if (animal  === 'dog') {
    console.log('Bark bark');
} else if (animal === 'cat') {
    console.log('Meow meow');
} else {
    console.log('Unknow animal');
}

console.log('----------------------');


const day = 6;

switch(day) {
    case 1:
        console.log('pirm');
        break;

    case 2:
        console.log('ant');
        break;

    case 3:
        console.log('tre');
        break;

    case 4:
        console.log('ket');
        break;

    case 5:
        console.log('penk');
        break;

    case 6:
        console.log('sest');
        break;

    case 7:
        console.log('sekm');
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalio diena');
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}

console.log('----------------------');

const process = 3;

if (process === 1) {
    console.log('paimti puodeli');
} else if (process === 2) {
    console.log('isideti arbatos');
} else if (process === 3) {
    console.log('isideti saldikli');
} else if (process === 4) {
    console.log('ipilti vandens');
} else if (process === 5) {
    console.log('ismaisyti');
} else if (process === 6) {
    console.log('gerti');
}

switch (process) {
    case 1:
        console.log('paimti puodeli');
    case 2:
        console.log('isideti arbatos');
    case 3:
        console.log('isideti saldikli');
    case 4:
        console.log('ipilti vandens');
    case 5:
        console.log('ismaisyti');
    case 6:
        console.log('gerti');
        break;

    default:
        console.log('Tai jau viska sekmingai atlikai ;)');
}