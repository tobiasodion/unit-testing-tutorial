import { add, divide } from '/src/utils/maths';
import { describe, it, expect, vi } from 'vitest';

describe('add', () => {
    it('should add two positive numbers', () => {
        const actualResult = add(1, 2);
        const expectedResult = 3;

        expect(actualResult).toBe(expectedResult);
    });

    it('should add two negative numbers', () => {
        const actualResult = add(-1, -2);
        const expectedResult = -3;

        expect(actualResult).toBe(expectedResult);     
    });

    it('should add one positive and one negative numbers', () => {
        const actualResult = add(1, -2);
        const expectedResult = -1;

        expect(actualResult).toBe(expectedResult);
    })
});

describe('divide', () => {
    it('should divide two positive numbers', () => {
        const actualResult = divide(6, 2);
        const expectedResult = 3;

        expect(actualResult).toBe(expectedResult);
    });

    it('should divide two negative numbers', () => {
        const actualResult = divide(-6, -2);
        const expectedResult = 3;

        expect(actualResult).toBe(expectedResult);
    });

    it('should divide one positive and one negative numbers', () => {
        const actualResult = divide(6, -2);
        const expectedResult = -3;

        expect(actualResult).toBe(expectedResult);
    });

    it('should throw error on dividing by 0', () => {
        expect(() => divide(6, 0)).toThrowError()
    });

    it('should call console.log on dividing by 0', () => {
        const spy = vi.spyOn(console, 'log');
        divide(6, 0);
        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith('Cannot divide by 0');
    })
});