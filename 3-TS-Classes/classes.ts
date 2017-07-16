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


class Yaka {
    private name : string = 'Yaka';
    constructor(){
    	console.log('hello from Yaka constructor')
    }
    //    hello():void {
    //    console.log('hello parent')
    // }

       yakaEngine():void {
           console.log('hello From Yaka Engine')
    }    
}

class Zaqa extends Yaka {
    protected name : string = 'Zaqa';

	constructor(){
	    super()
        //console.log('aqua')
	    // super()
	    //this.hello()
        this.zaqaEngine()
	}
	    zaqaEngine():void{
	        super.yakaEngine()
	        console.log('hello from Zaqa engine')
	}
}

let a:Yaka = new Yaka();
let ab:Zaqa = new Zaqa();

let aba:Zaqa = new Zaqa.name();
