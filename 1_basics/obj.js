console.log("obj");
const sym = Symbol("key")
let obj ={ mango:"orange",quantity:100,
    [sym]:"sym1",
    hey : (mango,quantity)=>{
console.log(`the colour of mango id ${obj.mango} nd the quantity is ${obj.quantity}`);

    }
}
console.log(obj.mango);
console.log(obj['quantity'])
console.log(`the colour of mango id ${obj.mango} nd the quantity is ${obj.quantity}`);
console.log(obj.hey);
console.log(obj[sym]);// we need to access symbol like this way
console.log(typeof obj[sym]);

console.log(obj);

// we can use freeze keyboard to freeze something
Object.freeze(obj);// changs willl not be propogated
console.log(obj);
obj.quantity=200;
console.log(obj);


let sym2 = Symbol(1234)
let user ={
    name:"rohan",
    id:500,
    marks:{maths:90,science:85},
    isPass:true,
    qualties:["sportmenship","goodguy"],
    [Symbol("pid")]:212,
    greet : function(){
        return "good mornng"
    },
    greet2()
    {
        return `hello ${this.name} hru`

    }
};
Object.freeze(user);
user.marks.maths=100;
console.log(user);
console.log(user.greet());
console.log(user.greet2());

//const abc = new Object(); // singelton obj
const abc ={}
abc.id=102
abc.name="sam"
abc.log=false

const obj1 ={1:"a" ,2:"b"}
const obj2 ={3:"c" ,4:"d"}

const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

const obj4 ={...obj1,...obj2}
//console.log(obj4); //sp operator

const users =[ //array of objects
    {
        id:200,
        email:"1@gmail.com"

    },
]

//console.log(Object.keys(user));
//console.log(Object.values(user));

console.log(obj1.hasOwnProperty("isloogedin")); //does the prop exists or not


//destructuring of obj
const course = { 
    name:"js",
    price:"infinity",
    duration:"6 months"
}

//clean code
console.log(course.duration);
//destructure 
const {duration: du} =course;
const {price} =course;
console.log(price);

//value returns as json while req from server
//also we get in arrays of obj
