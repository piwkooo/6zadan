import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateCallback(num1, num2, operation, callback) {
    setTimeout(() => {
        let result;
        switch (operation) {
            case 'dodawanie':
                result = num1 + num2;
                break;
            case 'mnozenie':
                result = num1 * num2;
                break;
            default:
                return callback(new Error('nieprawidolwa operacja'));
        }
        callback(null, result);
    }, 2000); 
}

function calculatePromise(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result;
            switch (operation) {
                case 'dodawanie':
                    result = num1 + num2;
                    break;
                case 'mnozenie':
                    result = num1 * num2;
                    break;
                default:
                    return reject(new Error('nieprawidlowa operacja'));
            }
            resolve(result);
        }, 2000); 
    });
}

function askUser() {
    rl.question('podaj pierwsza liczbe: ', (first) => {
        rl.question('podaj druga liczbe: ', (second) => {
            rl.question('jaka operacje chcesz wykonac dodawanie/mnozenie? ', (operation) => {
                rl.question('jaka metode chcesz uzyc callback/promise? ', (method) => {
                    const number1 = parseFloat(first);
                    const number2 = parseFloat(second);

                    if (isNaN(number1) || isNaN(number2)) {
                        console.error('prosze podac poprawne liczby');
                        rl.close();
                        return;
                    }

                    if (method === 'callback') {
                        calculateCallback(number1, number2, operation, (error, result) => {
                            if (error) {
                                console.error(error.message);
                            } else {
                                console.log(`wynik: ${result}`);
                            }
                            rl.close();
                        });
                    } else if (method === 'promise') {
                        calculatePromise(number1, number2, operation)
                            .then(result => {
                                console.log(`wynik: ${result}`);
                                rl.close();
                            })
                            .catch(error => {
                                console.error(error.message);
                                rl.close();
                            });
                    } else {
                        console.error('nieprawidlowa metoda');
                        rl.close();
                    }
                });
            });
        });
    });
}

askUser();
