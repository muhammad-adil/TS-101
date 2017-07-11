/*
var abc = 10;

if (typeof abc === 'number' ) {
    console.log(true);
}else if(abc === 'boolean') {
    console.log(abc);
}else if(abc === 'string') {
    console.log( 'true' );
} else {
    console.log(false);
} 
*/
let students : { firstName: string , lastName: string , age: number , email: string }[] = [
      {
            firstName: 'john',
            lastName: 'doe',
            age: 28,
            email: 'john.doe@gmail.com'
      },
      {
            firstName: 'john',
            lastName: 'doe',
            age: 18,
            email: 'john.doe@gmail.com'
      },
      {
            firstName: 'john',
            lastName: 'doe',
            age: 20,
            email: 'john.doe@gmail.com'
      },
       {
            firstName: 'john',
            lastName: 'doe',
            age: 19,
            email: 'john.doe@gmail.com'
      },
            {
            firstName: 'john25',
            lastName: 'doe',
            age: 25,
            email: 'john.doe@gmail.com'
      }

];


var a = students.filter(function(el) {
  return el.age > 20 || el.age < 17;
   //console.log (a);      
})
console.log (a);



var b = students.filter(function(el) {
  return el.age > 20 && el.age < 17;
   //console.log (a);      
})
  console.log (b);      


/** let a = students.filter(function(el) {
   return el.age < 20 && el.age < 21;
 }
**/