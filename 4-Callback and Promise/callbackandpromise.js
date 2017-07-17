//promise (res,rej){}
// var task = new Promise (function( res , rej ) => {
// 	setTimeout(res , 100 , 'one')
// });
/*******************************************/
function getIftari(callback) {
    setTimeout(function () {
        callback(['mango', 'banana', 'apple']);
    }, 2000);
}
getIftari(function (iftari) {
    if (iftari) {
        console.log('wait for azan');
    }
    else {
        console.log('try later');
    }
});
//old way
function add(num1, num2) {
    return num1 + num2;
}
if (add(1, 3) == 4) {
    console.log('true');
}
else {
    console.log('false');
}
//Promise
function getIftariProm() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(['mango', 'banana', 'apple']);
        }, 2000);
    });
}
var iftariProm = getIftariProm();
iftariProm.then(function (iftari) {
    console.log('getIftariP', iftari);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('second');
        }, 3000);
    });
}).then(function (response) {
    console.log('c response', response);
    return 555;
}).then(function (response) {
    console.log('c response', response);
});
