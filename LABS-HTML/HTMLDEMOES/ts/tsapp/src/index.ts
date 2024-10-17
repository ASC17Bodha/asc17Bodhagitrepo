








// Enums

enum Direction{
    Up,
    Down,
    Left,
    Right
}

const move=Direction.Up;
console.log(move);

console.log(Direction[1]);
console.log(Direction[move]);


enum Direction1{
    Up=1,
    Down,
    Left=50,
    Right
}

console.log(Direction1[Direction1.Up]);
console.log(Direction1[Direction1.Down]);
console.log(Direction1[Direction1.Left]);
console.log(Direction1[Direction1.Right]);

console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

// modules



