// interface CircleConfig {
// 	color?: string;
// 	radius?: number;
// 	diameter?: number;
// }

// function createCircle(config: CircleConfig) : CircleConfig {
// 	let newCircle = {color: null, radius: null, diameter: null};
// 	if (config.color) {
// 		newCircle.color = config.color;
// 	}
// 	if (config.diameter) {
// 		newCircle.diameter = config.diameter;
// 	}
// 	return newCircle;
// }
// var g = new Number(2345);

// var z = g instanceof Number;
// var c = typeof g;

// // document.getElementById("demo").innerHTML = z;
// // var y = new String("John hanna");

// /*var carname;*/
// class Car {
// 	carname: string;
// 	constructor(brand) {
// 		this.carname = brand;
// 	}
// 	present(x) {
// 		return x + ", I have a " + this.carname;
// 	}
// }

// var mycar = new Car("Ford");

// document.getElementById("demo").innerHTML = mycar.present("Hello");
// console.log(g);
// // let circle = createCircle({color : 'black', radius: 34});
// // console.log("diameter: " + circle.diameter, circle.color);
// // console.log(circle.diameter);

// enum Color {Red = 1, Green = "asdfasdf", Blue=3};
// // let c: Color = Color.Green;

// // console.log(c);
// let colorName: string = Color['Green'];

// function warnUser(): void {
//     console.log("This is my warning message");
// }


// Function returning never must have unreachable end point
// function error(message: string): never {
//     throw new Error(message);
// }

// // Inferred return type is never
// function fail() {
//     return error("Something failed");
// }

// // Function returning never must have unreachable end point
// function infiniteLoop(): never {
//     while (true) {
//     }
// }

// alert(error);
// for (var i = 0; i < 10; i++) {
//     console.log(i); 
// }



//

// interface SquareConfig {
//     color: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): SquareConfig {
//     let newSquare = {color:"" , area: 4343, width:1};
    
//     if (config.color) {
//         // Error: Property 'clor' does not exist on type 'SquareConfig'
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         // Error: Property 'clor' does not exist on type 'SquareConfig'
//         newSquare.width = config.width;

//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;

//     }
//     console.log(typeof(newSquare.width));
//     return newSquare;
// }

// let mySquare = createSquare({color:"g"});

// console.log(mySquare);

// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// let search: SearchFunc;
// search = function(source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1;
// }
// console.log(search("Nguyen Van A","Nguyen")); // return true

// interface StringArray {
//     [gg: number]: string;
// }

// let myName: StringArray;
// // myName = ["Tôi", "là","Nguyễn","Văn","A", "ff", "sdfgsdfg"];
// myName = [];
// let myStr: string = myName["dsdfsfsdfsdfsdd"] = "ádas";
// console.log(myName["dsdfsfsdfsdfsdd"]);

// const a = 3453;
// a =3434

// class Student {
//     fullName: string;

//     constructor(protected firstName: string, public middleInitial: string, public lastName: string) {
//     }

//     demo(){

//     }
// }

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = new Student("sdfas", "ádfasdf", "ádfasdf");

// document.body.textContent = greeter(user);

// interface Shape {
//     color: string;
// }

// interface PenStroke {
//     penWidth: number;
// }

// interface Square extends Shape, PenStroke {
//     sideLength: number;
// }

// let square = {} as Square;
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 40;

// console.log(square);


// class Control {
//     private state: any;
// }

// interface SelectableControl extends Control {
//     select(): void;
// }

// class Button extends Control implements SelectableControl {
//     select() { }
// }

// class TextBox extends Control {
//     select() { }
// }

// // class Student {
// //     fullName: string;

// //     constructor(protected firstName: string, public middleInitial: string, public lastName: string) {
// //     }

// //     demo(){

// //     }
// // }
// // Error: Property 'state' is missing in type 'Image'.

// class Add extends Control implements SelectableControl{
//     select() { }
// }

// class Image implements SelectableControl {
//     // private state: any;
//     select() { }
// }

// class Location {

// }

// class Animal {
//     move(distanceInMeters: number) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// class Student {
//     // fullName: string;
//     // constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//     //     this.fullName = firstName + " " + middleInitial + " " + lastName;
//     // }

//     demo(para: number){
//         para += 12;
//         return para;
//     }
// }

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }

// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Goat");
// console.log(employee)
// animal = rhino;
// animal = employee; // Error: 'Animal' and 'Employee' are not compatible

class Fish {
  habitat: string;
  length: number;
  constructor(habitat : string, length: number) {
      this.habitat = habitat;
      this.length = length;
  }
  
  renderProperties(run: number) {
    return ` ${this.habitat} voi chieu dai la ${this.length} va ${run}`;
  }
}

class Trout extends Fish {
  variety: string;
  constructor(habitat: string, length:number, variety:string) {
    super(habitat, length)
    this.variety = variety
  }
  
   renderPropertiesWithSuper(chay: number = 5) {
       super.renderProperties(chay);
       return this.variety;
  }
}

// var fish = new Fish()
var trout = new Trout("mama", 12, "asdfss");

console.log(trout.renderProperties(3453));
console.log(trout.renderPropertiesWithSuper());
// console.log(fish.renderProperties());

// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// console.log(sam.move())
// console.log(tom.move(34));

class Animal {
    private name: string;
    public env: string;
    public old: number;
    constructor(theName: string, the_env: string, the_old: number) { 
        this.name = theName; 
        this.env = the_env
        this.old = the_old
    }

    init(para: number){
        return `Day la ca ${this.name} voi tuoi tho la ${this.old}, moi truong song cua chung la ${this.env} nam ${para}`;
    }
}

interface Detail{
    chi ?: number
    width ?: number
    hegiht ?: number
    DG ?: string
}


var data = [];
var id = 0;
class fish_1 extends Animal {

    constructor(name: string, env: string, old: number) {
        super(name, env, old);
    }

    show(det : Detail) : Detail{
        super.init(det.chi);

        var tada = {chi: null, width: null, hegiht: null, DG: null, id:0}

        if (det.chi != null) {
            tada.chi = det.chi
        }
        if (det.width) {
            tada.width = det.width;
        }
        if (det.hegiht != null) {
            tada.hegiht = det.hegiht
        }
        if (det.DG) {
            tada.DG = det.DG;
        }

        tada.id = id

        data[tada.id] = tada
        id++;
        return tada;
    }
}
var anni = new fish_1("Cat", 'H2O', 35); // Error: 'name' is private;

console.log(anni.init(12));
console.log(anni.show({chi: 4, width: 10, hegiht: 20, DG: "Asdfasdfsad"}));
console.log(anni.show({chi: 4, width: 10, hegiht: 20, DG: "Asdfasdfsad"}));
console.log(anni.show({chi: 4, width: 10, hegiht: 20, DG: "Asdfasdfsad"}));
console.log(anni.show({chi: 4, width: 10, hegiht: 20, DG: "Asdfasdfsad"}));
console.log(anni.show({chi: 4, width: 10, hegiht: 20, DG: "Asdfasdfsad"}));

// myAdd has the full function type
let natisa: any[] = [42, 12, "sasdfas"];

let myAdd = function(x: number, y: number, z: string): number {
    console.log(z)
    return  x + y; 
};


    // console.log(myAdd(...natisa));


// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: deck.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);


// interface Lengthwise {
//     length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T{
//     return arg;
// }

// console.log(loggingIdentity({length: 12}));


// function identity<T>(arg: T): T {
//     console.log(arg)
//     return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity;
// // console.log()
// myIdentity(12)


// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }

// function identity<T>(arg: T): T {
//     console.log(arg);
//     return arg;
// }

// // let myIdentity: GenericIdentityFn<number> = identity; 

 
//  identity({arg: 12})


// enum ShapeKind {
//     Circle=4,
//     Square,
// }

// interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
// }

// interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
// }

// let c: Circle = {
//     kind: ShapeKind.Circle, // Error! Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
//     radius: 100,
// }

// console.log(c)

// function f(obj: { X: number }) {
//     return obj.X;
// }

// console.log(f({X: 12}))

// window.onmousedown = function(mouseEvent) {
//     // console.log(mouseEvent.button);   //<- OK
//     // console.log(mouseEvent.kangaroo); //<- Error!
//     alert('ok')
// };

// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// var tadasa = (arr: Point): Point =>{
//     return arr;
// }

// console.log(tadasa({x: 10, y:11})); 
// console.log(x = y);

class Triple {
  static triple(n = 1) {
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());        // 3
console.log(Triple.triple(6));       // 18

var tp = new BiggerTriple();

console.log(BiggerTriple.triple(3));
// 81 (not affected by parent's instantiation)

// console.log(tp.triple());
// 'tp.triple is not a function'


//abstract

abstract class laptop{
    mainboard(){
        return 'this is mainboard'
    }

    abstract chipset(): string;
}

class laptopDell extends laptop {    
    keyboard(){
        console.log("this is keyboard")
    }

    chipset(): string{
        return 'this is chipset'
    }
}

var a : laptopDell = new laptopDell()

console.log(a.chipset())

//interface
interface Person {
    name: string
    eat(kind: string): string
    sleep(): number
}

interface fird {
    chicken() : any
}

class machine {
    caculate(x: number, y: number){
        return x+y;
    }
}

class Nix extends machine implements Person, fird {
    name: string
    name_chicken: string
    x: number
    y: number
    constructor(name: string, x: number, y: number){
        super();
        this.x = x;
        this.y = y;
        this.name_chicken = name
    }
    eat(kind: string): string {
        this.name = kind
        return 'this is eat'+ " " + `${this.name}`
    }
    sleep(): number {
        return 23
    }
    chicken(): any{
        console.log(super.caculate(this.x, this.y));
        return `đây là tên của ${this.name_chicken}`
    }
}

var demo  = new Nix("tada", 5, 6);

console.log(demo.eat('an uong'));
console.log(demo.chicken());


//generics

function abc<T>(a : T) : T{
    return a
}

console.log(abc<string>("Asdasdf"));
console.log(abc<boolean>(true));


class ABC {
    static nasa<T>(arr: T[]): void{
        console.log(arr);
    }
}

ABC.nasa<number>([1,2,,4,4]);
ABC.nasa<string>(["12","2323","343"]);
ABC.nasa<any>([12,true,"12","2323","343"]);


class Product<A, B, C>{
    id: A;
    name: B;
    price: C;

    constructor(id: A, name: B, price: C){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showInfoProduct(){
        return `${this.id} - ${this.name} - ${this.price}`
        // return this.id
    }
}

var gg =  new Product<number, string, number>(12, "ádfasd", 12);
console.log(gg.showInfoProduct())

// interface StringArray {
//     [index: string]: any;
// }

// let myArray: StringArray = [];
// myArray["a"] = "Fred";
// myArray["b"] = "Bob";
// console.log(myArray)
// console.log(gg.showInfoProduct());

// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter = new Greeter("world");
// console.log(greeter.greet())