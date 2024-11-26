//Create a program with methods to test the functionality of the various methods of the String class
/*
 charAt
 contains
 length
 indexOf
 equals
 equalsIgnoreCase
 join
 lastIndexOf
 substring
 tolowercase
 touppercase
 trim
 */
package asgn;

import java.util.*;
public class asgn1_5 {
    
    public static void main(String[] args) {
        String str="Hello World";
        System.out.println(str.charAt(0));
        System.out.println(str.contains("World"));
        System.out.println(str.length());
        System.out.println(str.indexOf("World"));
        System.out.println(str.equals("Hello World"));
        System.out.println(str.equalsIgnoreCase("hello world"));
        System.out.println(str.join(" ", "Hello", "World"));
        System.out.println(str.lastIndexOf("World"));
        System.out.println(str.substring(0, 5));
        System.out.println(str.toLowerCase());
        System.out.println(str.toUpperCase());
        System.out.println(str.trim());
    }
}
