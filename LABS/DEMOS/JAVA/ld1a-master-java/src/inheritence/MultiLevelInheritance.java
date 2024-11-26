package inheritence;

public class MultiLevelInheritance {
    
    public static void main(String[] args) {
        C c = new C();
        c.display();
    }
}

class A{
    public String message="welcome to java";
    public A(){
        System.out.println("A()");
    }
    public A(String message){
        this.message=message;
        System.out.println("A(String)");
    }
    void display(){
        System.out.println("parent class");
    }
}
class B extends A{
    public B(){
        System.out.println("B()");
    }
    public B(String message){
        this.message=message;
        System.out.println("B(String)");
    }
    void display(){
        System.out.println("child class");
    }
}
class C extends B{
    public C(){
        System.out.println("C()");
    }
    public C(String message){
        this.message=message;
        System.out.println("C(String)");
    }
    void display(){
        System.out.println("child class c");
    }
}
