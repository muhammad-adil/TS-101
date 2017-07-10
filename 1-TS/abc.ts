
let students : { firstName: string, lastName: string, age: number, email: string }[] = [
      {
            firstName: 'john',
            lastName: 'doe',
            age: 28,
            email: 'john.doe@gmail.com'
      }    
];


let addedStudents = students.push([
		{'firstName':'adil' , 'lastName': 'khan' 'id': '123' , 'age' : 18 },
		{'firstName':'acva' , 'lastName': 'khan' 'id': '123' , 'age' : 17 },
		{'firstName':'acaa' , 'lastName': 'khan' 'id': '123' , 'age' : 10 }

	])

students.push({'firstName':'acaa' , 'lastName': 'khan' 'id': '123' , 'age' : 10 });
students.push({'firstName':'acva' , 'lastName': 'khan' 'id': '123' , 'age' : 17 });
students.push({'firstName':'adil' , 'lastName': 'khan' 'id': '123' , 'age' : 18 });

console.log(students);


let filteredArr = students.filter(function ( a , b){
	return students.age < 15 
})



function filteredStudentsFunc ( student , age , operator ){
	
}



console.log(filteredArr);


let task = students.map(function(student , 1){
	let values:any[] = [];
	for (let key in students){
		values.push(students.[key])
	}
	return values;
})



