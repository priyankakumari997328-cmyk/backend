const fs = require('fs').promises;
const fetch = require('node-fetch');
async function processUser(userId) {

try {
    const user ={id : userId,:Id'priyankakumari997328-cmyk'};
    console.log('fetched user:',user.name);
    const response = await fetch(`https://api.github.com/user/${user.name.toLowerCase()}`);
    const githubData =await response.json();
    console.log('GitHub bio:',githubData.bio ||'no bio');
    await fs.writeFile('user-data.txt',JSON.stringify({user,githubData}));
    console.log('Data saved to file');
}catch (err){
    console.log('Error:',err.message);

}

    
}
processUser();