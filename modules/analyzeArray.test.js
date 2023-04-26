import analyzeArray from "./analyzeArray";

it('Test Obj',()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({"average":4,"length": 6, "max": 8, "min":1});
})
it('Test Obj 1',()=>{
    expect(analyzeArray([1,80,30,4,2,6])).toEqual({"average":20.5,"length": 6, "max": 80, "min":1});
})