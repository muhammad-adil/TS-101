class Human {
    firstName:string
    lastName:string    
    age:number

    constructor(firstName:string, lastName:string){
        //this.setName(name)
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get FullName(){
        return this.getFullName();
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }

    // eat(){
    //    	console.log('eat')
    //       return this.eat
    // }
    // getAge(){}


    // setName(name:string){
    //     return this.name = name;
    // }

    // getName():string{
    //     return this.name
    // }


    // setFullName(firstName:string , lastName:string){
    //     return this.firstName + this.lastName = fullName ;
    // }

    // getFullName(firstName:string , lastName:string){
    //     return this.fullName ;
    // }    
}//Class ends here

    const yourFullName = new Human('john' , 'AppBakerz')
    console.log (yourFullName.FullName)

//const h = new Human('john')
//console.log('h :' , h.getName());
// console.log('h :' , h.eat());