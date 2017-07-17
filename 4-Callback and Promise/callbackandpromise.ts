
//promise (res,rej){}

// var task = new Promise (function( res , rej ) => {
// 	setTimeout(res , 100 , 'one')
// });

/*******************************************/

function getIftari(callback: Function){
	setTimeout(() => {
		callback (['mango','banana', 'apple'])
	}, 2000 )
}

getIftari((iftari) => {
	if(iftari){
		console.log('wait for azan');
	} else {
		console.log ('try later')
	}
});

//old way
function add(num1,num2){
	return num1 + num2;
}
if (add(1,3) == 4) {
	console.log('true')
}else{
	console.log('false')
}

//Promise
function getIftariProm() : Promise<string>{
	return new Promise ((resolve , reject ) => {
		setTimeout(() => {
            resolve (['mango','banana', 'apple'])
		} , 2000 )
	})
}

const iftariProm = getIftariProm();




iftariProm.then((iftari) => {
    console.log('getIftariP' , iftari);
        return new Promise ((resolve , reject) => {
            setTimeout(() => {
                resolve('second')
            }, 3000 )
        });
}).then((response) => {
    console.log('c response', response)
    return 555;
}).then((response)=>{
    console.log('c response' , response)
})

