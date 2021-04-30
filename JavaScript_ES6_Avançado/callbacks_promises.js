const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Second data');
    }, 1000);
});

//doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error));

doSomethingPromise.then(data => {
    console.log(data);
    return doOtherThingPromise;
    }).then(data2 => console.log(data2)).catch(error => console.log(error));
//Assim, você consegue reduzir o tratamento de erros em chamadas callbacks

//Status: Pending, Fulfilled, Rejected

function doSomething(callback){
    setTimeout(function() {
        callback('First data');
    }, 1000);
};

function doOtherThing(callback){
    setTimeout(function() {
        callback('Second data');
    }, 1000);
};

function doAll(){
    try{
        doSomething(function(data) {
            var processedData = data.split('');
            
            doOtherThing(function(data2) {
                var processedData2 = data2.split('');

                setTimeout(function() {
                    console.log(processedData, processedData2);
                }, 1000);
            });
        });
    } catch(err){
        //error handler
    }
};

doAll();

