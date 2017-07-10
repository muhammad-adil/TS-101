var students = [
    {
        firstName: 'Furqan',
        lastName: 'Khanzada',
        age: 28,
        email: 'furqan.khanzada@gmail.com'
    }
];
var addedStudents = students.push([
    { 'firstName': 'adil', 'lastName': 'khan', 'id': '123', 'age': 18 },
    { 'firstName': 'acva', 'lastName': 'khan', 'id': '123', 'age': 17 },
    { 'firstName': 'acaa', 'lastName': 'khan', 'id': '123', 'age': 10 }
]);
students.push({ 'firstName': 'acaa', 'lastName': 'khan', 'id': '123', 'age': 10 });
students.push({ 'firstName': 'acva', 'lastName': 'khan', 'id': '123', 'age': 17 });
students.push({ 'firstName': 'adil', 'lastName': 'khan', 'id': '123', 'age': 18 });
console.log(students);
var filteredArr = students.filter(function (a, b) {
    return students.age < 15;
});
function filteredStudentsFunc(student, age, operator) {
}
console.log(filteredArr);
var task = students.map(function (student) { }, 1), _a = void 0, _b = _a.let, let = _b === void 0 ? values : _b, _c = _a.any, any = _c === void 0 ? [] : _c;
for (var key in students) {
    values.push(students.[key]);
}
return values;
