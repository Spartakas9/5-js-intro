function digits(skaicius) {
    // input validation
    if (typeof skaicius !== 'number') {
        return 'ERROR: turi buti skaiciaus tipas';
    }
    if (!isFinite(skaicius)) {
        return `ERROR: ${skaicius} nera normalus skaicius`;
    }

    // logic
    const tekstinisSkaicius = '' + skaicius;
    let skaitmenuKiekis = tekstinisSkaicius.length;

    // jei skaicius turi desimtaine dali, sumaziname 1 vienetu
    if (skaicius % 1 !== 0) {
        skaitmenuKiekis--;
    }

    // jei skaicius yra neigiamas, tai sumaziname 1 vienetu
    if (skaicius <= 0) {
        skaitmenuKiekis--;
    }

    // return result
    return skaitmenuKiekis;
}

console.log(digits(5), '->', 1);
console.log(digits(781), '->', 3);
console.log(digits(37060123456), '->', 11);
console.log(digits(3.1415), '->', 5);
console.log(digits(-456), '->', 3);
console.log(digits(-3.1415), '->', 5);

console.log(digits(true));
console.log(digits('asd'));
console.log(digits(NaN ));
console.log(digits(Infinity));
console.log(digits(-Infinity));
console.log(digits());
console.log(digits(undefined));
console.log(digits(null));
console.log(digits([]));
console.log(digits(''));
console.log(digits([4624]));
console.log(digits(digits));