//reference type (arrays, objects)
//primitive types (string, null, undefined, boolean, number )
//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object. (reference typ example)
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5}; // 5
object1.a = 4;

//CLASS
//instantiation

class Player {
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
};

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Yuli', 'Cinderella');
wizard1.introduce();
wizard1.play();
