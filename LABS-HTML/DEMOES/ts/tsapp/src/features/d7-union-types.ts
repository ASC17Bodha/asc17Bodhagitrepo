
// Union types
// helps to use two differnt datatypes as input 

function disp(id:number|string){
    console.log(id);
}

disp("hello");
disp(101);




interface Square{
    kind:"square";
    length:number;
}

interface Circle{
    kind:"circle";
    radius:number;
}

function getArea(shape:Circle|Square):number{
    switch(shape.kind){
        case "circle": return Math.PI*(shape.radius)**2;
        case "square": return shape.length**2;
    }
}

const circle:Circle={
    kind:"circle",
    radius:4
}

const square:Square={
    kind:"square",
    length:4
}

console.log(getArea(square));
console.log(getArea(circle));