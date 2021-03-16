const a = 8;
const b = 5;

const c = 99;
const d = 88;

const e = 54155;
const f = 89514;


function desimteriopaSuma(pirmas, antras) {
    const s = (pirmas + antras) * 10;
    console.log(s);
}

desimteriopaSuma(a, b);
console.log('--------------');
desimteriopaSuma(c, d);
console.log('--------------');
desimteriopaSuma(e, f);




function labas (vardas, amzius, vietovardis) {
    console.log(`Labas, as esu ${vardas} ir man ${amzius} metai ir gyvenu ${vietovardis}.`);
}

labas ('Petras', 88, 'vilniuje');
labas ('Maryte', 77, 'Kaune');
labas ('Alphe', 5, 'namie');