// classes and super keywords

class Phone{
    feature:string;
    constructor(feature:string){
        this.feature=feature;
        console.log("base constructor called");
    }
    display():void{
        console.log("phone has ",this.feature);
    }
}

class smartPhone extends Phone{
    constructor(public feature:string,public camspecs:string){
        super(feature);
        console.log("smartphone constructor called");
    }
    display(): void {
        console.log("phone has ",this.feature,"and camspecs are: ", this.camspecs)
    }

}


const phone1=new Phone("speaker");
const smartPhone1=new smartPhone("speaker","108");

phone1.display();
smartPhone1.display();