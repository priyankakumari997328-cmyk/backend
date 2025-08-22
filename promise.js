 function fetchDatawithDelay(data,ms){
     return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (!data){
                reject(new Error('No data provided!'));

            }else{
                resolve(`Data:${data}`);
            }
            
        });


    });
 }
fetchDatawithDelay('Hell',5000)
.then(result=> console.log (result))
.catch(err => console.log('Error:',err.message));