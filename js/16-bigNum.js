function bigNum(list) {
    // input validation
    if (!Array.isArray(list)) {
        return `ERROR: netinkamas tipas, turi buti array (sarasas)`
    }
    if (list.length === 0) {
        return 'ERROR: array is empty'
    }

    // logic
    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];

        // ar tai normalus skaicius
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;        // eina i sekancia ciklo iteracija
        }

        // ar kos didesnis uz jau zinoma didziausia skaiciu
        if (number > biggest) {
            biggest = number
        }
    }

    // logic validation
    if (biggest === -Infinity) {
        return `ERROR: sarase nerastas nei vienas normalus skaicius`
    }

    // result
    return biggest;
}

console.log(bigNum('pomidoras'));
console.log(bigNum(484562));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum(undefined));
console.log(bigNum());
console.log(bigNum(bigNum));
console.log(bigNum(null));
console.log(bigNum({}));
console.log(bigNum([]));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78 );
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);

console.log(bigNum([1, 8, 3, 5, Infinity]), '->', 8);
console.log(bigNum([1, 8, Infinity, 3, 5]), '->', 8);
console.log(bigNum([Infinity, 1, 8, 3, 5]), '->', 8);





const student = {
    vardas: 'Petras',
    pazymiai: [10, 2],
    megstamosRaides: 'asf',
    kiekDienuGyvas: 5485,
    arNoriIPc: true,
    arSiemetMaudesi: false,
    tevai: {
        motina: {
            vardas: 'Onute',
            telNr: 4485621559,
            amzius: 55
        },
        tevas: {
            vardas: 'Jonas',
            telNr: 4485621559,
            amzius: 55
        }
    },
    aplankytosVietos: [
        {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGidu: true
        },
        {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGidu: false
        },
        {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGidu: true
        },
    ]
}

console.log(student);

console.log('-------------');

// Universalus info istraukimas is objekto
console.log(student['vardas']);
console.log(student['megstamosRaides']);
console.log(student['arNoriIPc']);
console.log(student['arSiemetMaudesi']);
console.log(student['pazymiai']);
console.log(student['pazymiai'][0]);
console.log(student['pazymiai'][1]);
console.log(student['tevai']);
console.log(student['tevai']['motina']);
console.log(student['tevai']['motina']['vardas']);

console.log('-------------');

// Supaprastintas info istraukimas is objekto
console.log(student.vardas);
console.log(student.megstamosRaides);
console.log(student.arNoriIPc);
console.log(student.arSiemetMaudesi);
console.log(student.pazymiai);
console.log(student.pazymiai[0]);
console.log(student.pazymiai[1]);
console.log(student.tevai);
console.log(student.tevai.motina);
console.log(student.tevai.motina.vardas)