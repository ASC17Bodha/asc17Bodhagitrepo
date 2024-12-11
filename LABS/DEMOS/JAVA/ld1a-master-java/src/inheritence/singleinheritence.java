//package inheritence;
//
//public class singleinheritence {
//    public static void main(String[] args) {
//        A a=new A();
//        a.display();
//        B b=new B();
//        b.display();
//    }
//
//}
////what is inheritance?
////inheritance is a mechanism in which one object acquires all the properties and behaviors of a parent object.
////types of inheritance
////single inheritance
////multilevel inheritance
////hierarchical inheritance
////multiple inheritance
////hybrid inheritance
//
//
//
////what is single inheritance?
////single inheritance is a type of inheritance in which a class inherits the properties and behaviors of a single class.
////what is multilevel inheritance?
////multilevel inheritance is a type of inheritance in which a class inherits the properties and behaviors of a class that inherits the properties and behaviors of another class.
////what is hierarchical inheritance?
////heirarchical inheritance is a type of inheritance in which a class inherits the properties and behaviors of a class that inherits the properties and behaviors of another class.
////what is multiple inheritance?
////multiple inheritance is a type of inheritance in which a class inherits the properties and behaviors of multiple classes.
////what is hybrid inheritance?
////hybrid inheritance is a type of inheritance in which a class inherits the properties and behaviors of multiple classes.
//
////multiple inheritance in java is not supported because of diamond problem.
////what is diamond problem?
////diamond problem is a type of inheritance in which a class inherits the properties and behaviors of multiple classes.
//
//
//class A{
//    public String message="welcome to java";
//    public A(){
//        System.out.println("A()");
//    }
//    public A(String message){
//        this.message=message;
//        System.out.println("A(String)");
//    }
//    void display(){
//        System.out.println("parent class");
//    }
//}
//
//class B extends A{
//    public B(){
//        System.out.println("B()");
//    }
//    public B(String message){
//        super(message);
//        System.out.println("B(String)");
//    }
//    void display(){
//        System.out.println("child class");
//        System.out.println("message: "+message);
//    }
//}
//
////what is super keyword?
////super keyword is used to refer to the immediate parent class object.
//
//
////what is interface?
////interface is a type of class that is used to define the behavior of a class.
////what is abstract class?
////abstract class is a type of class that is used to define the behavior of a class.
////what is abstract method?
////abstract method is a method that is declared without an implementation.
////what is final keyword?
////final keyword is used to declare a variable, method, or class as final.