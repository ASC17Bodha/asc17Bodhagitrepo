

// classes

class Animal{
    constructor(public name:string){}
    makeSound():void{
        console.log(`${this.name} makes a sound`);
    }

}

class Dog extends Animal{
    makeSound(): void {
        console.log(`${this.name} barks`);
    }
}

const animal=new Animal("Cat");
const dog=new Dog("Buddy");
animal.makeSound();
dog.makeSound();