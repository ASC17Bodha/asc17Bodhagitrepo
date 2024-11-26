package collections;

import java.util.*;

public class HashMapEx {

    public static void main(String[] args) {
        TreeMap<String, Integer> countrycodes = new TreeMap<String,Integer>();
        countrycodes.put("America", 1);
        countrycodes.put("India",91);
        countrycodes.put("Singapore",65);
        countrycodes.put("Japan",81);
        countrycodes.put("Japan".toUpperCase(),81);
        System.out.println(countrycodes);
        
        if(countrycodes.containsKey("Singapore")){
            System.out.println("Singapore is present");
        }

    }
    //What is a HashMap?
    //A HashMap is a collection of key-value pairs where each key is unique. It is based on the Hashtable data structure.
    //key can be null
    //value can be null
    //key cannot be duplicate
    //value can be duplicate
    //key can be any object
    //value can be any object

    //What is a TreeMap?
    //A TreeMap is a collection of key-value pairs where each key is unique. It is based on the Tree data structure.
    //key cannot be null in TreeMap
    //key is unique
    //value can be duplicate

    //TreeMap vs HashMap?
    //TreeMap is sorted based on the key
    //HashMap is not sorted based on the key
    //TreeMap is slow
    //HashMap is fast
    //TreeMap is thread safe
    //HashMap not thread safe

}

