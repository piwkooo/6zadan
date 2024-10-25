import readline from 'node:readline';
import fs from 'node:fs/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstName, lastName, age;

rl.question('podaj swoje imie: ', (answerFirstName) => {
    firstName = answerFirstName;
    rl.question('podaj swoje nazwisko: ', (answerLastName) => {
        lastName = answerLastName;
        rl.question('podaj swoj wiek: ', (answerAge) => {
            age = answerAge;
            rl.close();
            saveToFile(); 
        });
    });
});

function saveToFile() {
    const fileName = 'daneUzytkownak.json';

    try {
        fs.writeFileSync(fileName, `imie: ${firstName}, nazwisko: ${lastName}, wiek: ${age}`);
        console.log(`zapisano dane do pliku: ${fileName}`);
        readFromFile();
    } catch (error) {
        console.error('cos poszlo nie tak :(', error);
    }
}



function readFromFile() {
    
    try {
        const data = fs.readFileSync('daneUzytkownak.json', 'utf-8');
        console.log(data); 
    } catch (error) {
        console.error('blad podczas odczytu pliku:', error);
    }
}