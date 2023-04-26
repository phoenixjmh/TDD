const analyzeArray=(arr,minNum=100000,maxNum=0)=>{

    arr.forEach((item)=>item<minNum? minNum=item:item>maxNum?maxNum=item:0)
  
    return{average:arr.reduce((a,b)=>a+b)/arr.length,max:maxNum,length:arr.length,min:minNum}
}
module.exports=analyzeArray;