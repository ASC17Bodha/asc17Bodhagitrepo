package collections;
import java.util.*;
public class SetEx {
    public static void main(String[] args) {    
        HashSet<String> colors = new HashSet<String>();
        colors.add("Red");
        colors.add("Blue");
        colors.add("Green");
        colors.add("Yellow");
        colors.add("Orange");
        colors.add("Red");
        colors.add("Black");
        System.out.println(colors);
        colors.add(null);
        colors.add("Pink");
        System.out.println(colors);
        colors.remove("Red");
        System.out.println(colors);
        colors.clear();
        System.out.println(colors);

        HashSet<String> colors1 = new HashSet<String>();
        colors1.add("Red");
        colors1.add("Blue");
        colors1.add("Green");
        colors1.add("Yellow");
        colors1.add("Orange");

        HashSet<String> colors2 = new HashSet<String>();
        colors2.add("White");
        colors2.add("Black");

        HashSet<String> union = new HashSet<String>();
        union.addAll(colors1);
        union.addAll(colors2);
        System.out.println(union);
    }
}

//What is a HashSet?
//A HashSet is a collection of items where every item is unique, and it is based on the Hashtable data structure.
//Functions of HashSet
//1. add()
//2. remove()
//3. contains()
//4. size()
//5. clear()
//6. isEmpty()
//7. iterator()
//8. toArray()
//9. clone()
