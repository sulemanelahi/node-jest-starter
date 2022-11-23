class Calculation {
    add(...numbers: number []) {
        numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
}

export default new Calculation();