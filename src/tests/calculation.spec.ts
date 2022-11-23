import calculate from '../calculation';

describe('Calculation', () => {
    it('should return addition of two number', () => {
        expect(calculate.add(2,2)).toBe(4);
    })
})