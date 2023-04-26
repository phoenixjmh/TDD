const caesarCipher=(string,factor)=>{
    let myChars=[...string.toLowerCase()];
    let abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   
     let result=myChars.map(item=>{
        let scrambledChar=(abc.indexOf(item)+factor)>=26? (abc.indexOf(item)+factor)-26:((abc.indexOf(item))+factor);

        return item=abc[scrambledChar];
    })
    return result.join('');
}
module.exports=caesarCipher;