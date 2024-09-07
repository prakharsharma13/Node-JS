const fs = require('fs');

// fs.writeFileSync("./text.txt", "Hey there!");

// const result = fs.readFileSync("./contact.txt", "utf-8" );
// console.log(result);

fs.readFile("./contact.txt", "utf-8", (err,result) => {
    if(err){
        console.log('Error', err)
    }else{
        console.log(result)
    }
})

