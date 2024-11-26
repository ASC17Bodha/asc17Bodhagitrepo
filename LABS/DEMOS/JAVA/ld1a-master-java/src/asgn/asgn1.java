package asgn;

public class asgn1 {
    public static void main(String[] args) {
        Overloading overloading = new Overloading();
        System.out.println(overloading.add(10, 20));
        System.out.println(overloading.add(10.0, 20.0));
        System.out.println(overloading.add(10L, 20L));
        System.out.println(overloading.add((short)10, (short)20));
        System.out.println(overloading.add("Hello", 20));
    }
}

class Overloading {
    short add(short a, short b) {
        return (short) (a + b);
    }
    double add(double a, double b) {
        return a + b;
    }
    int add(int a, int b) {
        return a + b;
    }
    long add(long a, long b) {
        return a+b;
    }
    String add(String a, int b) {
        return a + b;
    }
}

//what is wrapper class?
//wrapper class is a class that wraps the primitive data types and provides methods to convert them to objects.
//example: Integer, Double, Boolean, Character, Byte, Short, Long, Float, Double
// primitive data types   wrapper class
// byte               Byte
// short              Short
// int                Integer
// long               Long
// float              Float
// double             Double
// char               Character
// boolean            Boolean

//example: float f = 10.0f;
// Float fObj = new Float(f);
//byte b = fObj.byteValue();




//what is autoboxing?
//autoboxing is the process of converting a primitive data type to a wrapper class object.
//example:
// int i = 10;
// Integer iObj = i;
//what is unboxing?
//unboxing is the process of converting a wrapper class object to a primitive data type.
//example:
// Integer iObj = 10;
// int i = iObj;

//what is constable?
//constable is a class that contains the values of constants.


//describeConstable() method?
//describeConstable() method is a method of the Constable class that returns a constant object.
//example:
// public class Constable {
    //     public static final int MAX_VALUE = 100;
    //     public static final int MIN_VALUE = 0;
    //     public static final Constable describeConstable() {
    //         return new Constable();
    //     }
    // }


//what is final?
//final is a keyword that is used to declare a variable, method or class as final.
//what is the difference between final and constant?
//final is a keyword that is used to declare a variable, method or class as final.
//constant is a variable that is declared as final.
//example:


