var Human = (function () {
    function Human(firstName, lastName) {
        //this.setName(name)
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Human.prototype, "FullName", {
        get: function () {
            return this.getFullName();
        },
        enumerable: true,
        configurable: true
    });
    Human.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Human;
}()); //Class ends here
var yourFullName = new Human('john', 'AppBakerz');
console.log(yourFullName.FullName);
//const h = new Human('john')
//console.log('h :' , h.getName());
// console.log('h :' , h.eat()); 
