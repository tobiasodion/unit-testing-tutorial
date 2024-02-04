const add = (a: number, b: number) => a + b;

const subtract = (a: number, b: number) => a + b;

const multiply = (a: number, b: number) => a * b;

const divide = (a: number, b: number) => {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by 0');
        }
    } catch (e) {
        console.log('Cannot divide by 0');
    }

    return a / b;
}

export { add, subtract, multiply, divide };



