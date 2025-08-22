const fs = require('fs');
fs.readFile('test.txt','utf8',(err,data) =>{
    if (err){
        console.error('error raeding file:',err);
        return;
    }
    console.log('fill content:',data);
});