import calculator from "./calculator";

it('Sum Test',()=>{
    expect(calculator.sum(1,2)).toBe(3);
})
it('Multiply test',()=>{
    expect(calculator.multiply(1,2)).toBe(2);
    
})
it('Divide test',()=>{
    expect(calculator.divide(1,2)).toBe(0.5);
    
})
it('Subtract test',()=>{
    
    expect(calculator.subtract(1,2)).toBe(-1);
})