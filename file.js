const { getEventListeners } = require("events");
const fs = require("fs");


fs.writeFileSync("./test.txt","Hey there")


const result=fs.readFileSync('./test.txt','utf-8');
console.log(result);

fs.readFile('./test.txt','utf-8',(err, result)=>{
    if(err){
        console.log("error", err);
    }else{
        console.log(result);
    }
})

fs.appendFileSync('./test.txt',`\nhey there\n`);

fs.copyFileSync('./test.txt','copy.txt');
  
fs.unlinkSync('./copy.txt');

console.log(fs.statSync('./test.txt').isFile());