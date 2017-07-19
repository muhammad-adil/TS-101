/**
File Format{

blob
array@
base64
}

Global object

callback is old use promise 
promise

fetch
fetch return promise

API = Application Program Interface

**/

// fetch()
// .then((){})
// .then((){})

/**
function getProducts() {
    return fetch('https://gocleanlaundry.herokuapp.com/api/products').then((response)=>{
        return response.json()
    })
}

 getProducts().then((products) =>{
    console.log('abc..', products)
})
**/


function getProducts() {
    return fetch('products.json').then((response)=>{
        return response.json()
    })
}

 getProducts().then((products) =>{
    console.log('abc..', products)
})