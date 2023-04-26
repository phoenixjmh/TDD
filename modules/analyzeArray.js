const analyzeArray=(arr)=>{

    let av=(arr.reduce((a,b)=>a+b))/arr.length;
    let minNum=10000000000;
    let maxNum=0;
    
    arr.forEach((item)=>{
        item<minNum? minNum=item:0;
        item>maxNum?maxNum=item:0;
    })
    let obj= {
        average:av,
        max:maxNum,
        length:arr.length,
        min:minNum,
    }

    return obj;
}
module.exports=analyzeArray;