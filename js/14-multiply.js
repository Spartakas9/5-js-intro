function daugyba (a, b) {
    // parametru validacija
    // jeigu, a yra ne skaicius, grazinti klaidos pranesima
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    // jeigu, b yra ne skaicius, grazinti klaidos pranesima
    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaiciaus tipo';
    }

    // logika
    const rez = a * b;

    // rezultato grazinimas
    return rez;
}


console.log(daugyba('trys', 'penki'));
console.log(daugyba(3, 'penki'));
console.log(daugyba('trys', 5));
console.log(daugyba(true, false));
console.log(daugyba(3, false));
console.log(daugyba(false, 5));
console.log(daugyba(['asd', 786], 3));
console.log(daugyba(3, ['asd', 786]));
console.log(daugyba(['asd', 786], ['asd', 786]));


console.log(daugyba(4, 5), '->', 20);
console.log(daugyba(44, 5), '->', 220);
console.log(daugyba(-44, -55), '->', 2420);
console.log(daugyba(-44, 55), '->', -2420);
console.log(daugyba(-44, 0), '->', 0);
console.log(daugyba(0, 0), '->', 0);
console.log(daugyba(0, 54850), '->', 0);
console.log(daugyba(3.14, 2), '->', 6.28);
console.log(daugyba(3, 5), '->', 15);