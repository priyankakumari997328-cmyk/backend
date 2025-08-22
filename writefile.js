const fs = require('fs'). promises;
async function writefileExample() {
    try{
        await fs.writeFile('myfile.txt', 'hello,world!','utf8');
        console.log('files created successfully');
    }
    catch{
        console.error('error writing files:,err');
    }
    
}
writefileExample();