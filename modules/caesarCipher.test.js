import caesarCipher from "./caesarCipher";

it('Test Cipher',()=>{
    expect(caesarCipher('abc',1)).toBe('bcd');
})
it('Test Cipher again',()=>{
    expect(caesarCipher('buttskinholderBoy',6)).toBe('hazzyqotnurjkxhue');

});