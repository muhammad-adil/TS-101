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


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Yaka = (function () {
    function Yaka() {
        this.name = 'Yaka';
        console.log('hello from Yaka constructor');
    }
    //    hello():void {
    //    console.log('hello parent')
    // }
    Yaka.prototype.yakaEngine = function () {
        console.log('hello From Yaka Engine');
    };
    return Yaka;
}());
var Zaqa = (function (_super) {
    __extends(Zaqa, _super);
    function Zaqa() {
        var _this = _super.call(this) || this;
        _this.name = 'Zaqa';
        //console.log('aqua')
        // super()
        //this.hello()
        _this.zaqaEngine();
        return _this;
    }
    Zaqa.prototype.zaqaEngine = function () {
        _super.prototype.yakaEngine.call(this);
        console.log('hello from Zaqa engine');
    };
    return Zaqa;
}(Yaka));
var a = new Yaka();
var ab = new Zaqa();
var aba = new Zaqa.name();
