/*

SWITCH STATEMENT:

switch () { case, break, default }

*/

const animal = 'asdf';

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


const day = 3;

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

    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}

switch (day) {
    case 1:
        console.log('darbo diena');
        break;
    
    case 2:
        console.log();
}