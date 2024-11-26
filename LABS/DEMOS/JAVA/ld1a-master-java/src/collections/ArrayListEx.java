package collections;
import java.lang.reflect.Array;
import java.util.*;
import javax.swing.colorchooser.ColorSelectionModel;

public class ArrayListEx {
    public static void main(String[] args) {
    ArrayList colors = new ArrayList();
    colors.add("Red");
    colors.add(1);
    int x=10;
    ArrayListEx arrayListEx=new ArrayListEx();
    arrayListEx.usingGenerics();
    //What is Boxing?
    //Boxing is the process of converting a primitive data type to an object of the corresponding wrapper class.
    //Boxing is done by using the wrapper classes of the primitive data types.
    Integer xToInteger= new Integer(x);
    colors.add(xToInteger);
    colors.add(false);
    boolean b=true;
    Boolean bToBoolean=new Boolean(b);
    colors.add(bToBoolean);
    System.out.println(colors);
    }
    private static void usingGenerics(){
        ArrayList names=new ArrayList();
        names.add("Raj");
        names.add("Rohan");
        names.add("Rajat");
        names.add("Rajiv");
        names.add("Raja");
        names.add("Rajesh");
        names.add(3, "orange");
        System.out.println(names);
        System.out.println(names.get(3));
        String name1="Rajesh";
        System.out.println(name1.equals(names));
    }
    
}

//What are collections?
//Collections are used to store and manipulate groups of objects.
//Types of collections
//1. List
//2. Set
//3. Map
//4. Queue
//5. Stack
//6. Deque
//7. PriorityQueue
//8. LinkedList
//9. HashSet
//10. TreeSet

//ArrayList is a class that implements the List interface.