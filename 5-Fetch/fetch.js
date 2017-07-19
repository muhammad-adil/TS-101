/**
File Format
blob
array@
base64
Global object
fetch
promise
fetch return promise
callback is old use promise
API=Application Program Interface
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
    return fetch('products.json').then(function (response) {
        return response.json();
    });
}
getProducts().then(function (products) {
    console.log('abc..', products);
});
