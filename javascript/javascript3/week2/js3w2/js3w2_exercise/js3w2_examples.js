// This example could definitely be more real world! Any ideas, make a pull request!
const promise = new Promise((resolve) => {
    setTimeout(() => {
        const tea = {
            color: 'green',
            taste: 'Bitter',
        };

        resolve(tea);
    }, 3000);
});

const isThereMoreTea = true;

// This example could definitely be more real world! Any ideas, make a pull request!
function makeTea() {
    console.log('Start making tea');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tea = {
                color: 'green',
                taste: 'Bitter',
            };
            
            if (isThereMoreTea) {
                resolve(tea);
            } else {
                reject('We dont have more TEA!!');
            }
        }, 3000);
    });
}

console.log(makeTea());

makeTea()
    .then((returnedTeaObject) => {
        console.log(returnedTeaObject);
    })
    .catch((error) => {
        console.log(error);
    })

