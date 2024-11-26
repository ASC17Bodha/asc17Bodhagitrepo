package funda;

public class DefaultConstructor {
    //what are reference variables?
    //reference variables are variables that store the memory address of an object.
    //reference variables are also known as pointers, references, or handles.

    // what are instance variables?
    //instance variables are variables that are declared in a class but outside of any method.
    //instance variables are also known as fields,attributes, or properties.
    int x;
    float f;
    boolean b;

    
    //what is a thread?
    //a thread is a lightweight sub-process, the smallest unit of processing.
    //a thread can execute concurrently with other threads.
    //a thread can share its data space with other threads.
    //a thread can communicate with other threads.
    
    
    public static void main(String[] args) {
        DefaultConstructor defaultConstructor = new DefaultConstructor(1,2.0f,true);
        System.out.println("x: " + defaultConstructor.x);
        System.out.println("f: " + defaultConstructor.f);
        System.out.println("b: " + defaultConstructor.b);
        Thread thread=Thread.currentThread();
        System.out.println(thread);
        System.out.println(thread.getName());
        System.out.println(defaultConstructor);
    }
    //what is constructor?
    //construcctor is a special method that is used to initialize the object.


    //what is the default constructor?
    //default constructor is a constructor that is automatically generated by the compiler if no constructor is defined in the class.
    //default constructor is a constructor that has no parameters.
    //default constructor is a constructor that is called when an object is created.

    //what is parameterized constructor?
    //parameterized constructor is a constructor that has parameters.
    //parameterized constructor is a constructor that is called when an object is created with parameters.

    public DefaultConstructor() {
        // this.x = 10;
        this.f = 20;
        this.b = true;
    }

    public DefaultConstructor(int x, float f, boolean b) {
        this.x = x;
        this.f = f;
        this.b = b;
    }
    @Override
    public String toString() {
        return "DefaultConstructor{" +
                "x=" + x +
                ", f=" + f +
                ", b=" + b +
                '}';
    }
}
