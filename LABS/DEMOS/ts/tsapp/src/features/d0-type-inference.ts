// typescript infers the type of variable from what is assigned to it
let x=10;
// typescript assumes it to be a number
x=20;
// you can directly re-asign it
// you cannot do x='Hello' bcoz typescript has assigned the type as number to x
let y='Hello';

// you can also assign type directly in typescript
let z:number;
// here typescript assigns type as number 


// different types of types in ts

let a:number=10;
let b:string="Hello";
let c:boolean=true;
let d:any=20;
let e:any='hi';
let f:any=true;
let g:number[]=[10,20];
let h:string[]=["hello","world"];
let i:boolean[]=[true,false];
let j:any[]=[2,"what","are"];   //any array
let k:[string,number]=["you",30];  //tuple
let l:object = { name:"sanjay",age:23,
    emailids:{
        email:"abc@gmail.com",
    },
    preference:["sports","music"]
};



console.log("a:" ,typeof(a) );
console.log("b:",typeof(b) );
console.log("c" ,typeof(c) );
console.log("d" ,typeof(d) );
console.log( "e",typeof(e) );
console.log( "f",typeof(f) );
console.log( "g",typeof(g) );
console.log( "h",typeof(h) );
console.log( "i",typeof(i) );
console.log( "j",typeof(j) );
console.log( "k",typeof(k) );
console.log( "l",typeof(l) );

console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`d: ${d}`);
console.log(`e: ${e}`);
console.log(`f: ${f}`);
console.log(`g: ${g}`);
console.log(`h: ${h}`);
console.log(`i: ${i}`);
console.log(`j: ${j}`);
console.log(`k: ${k}`);
console.log(`l: ${l}`);
console.log(l);
