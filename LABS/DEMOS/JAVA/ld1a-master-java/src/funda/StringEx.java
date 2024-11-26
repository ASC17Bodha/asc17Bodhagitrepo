package funda;

public class StringEx {
    String message="Well, It is a wonderful day!";
    boolean result=message.contains("wonderful");
    public static void main(String[] args) {
        StringEx stringEx=new StringEx();
        // System.out.println(stringEx.message);
        // System.out.println(stringEx.result);
        // System.out.println(stringEx.message.length());
        // System.out.println(stringEx.message.charAt(0));
        // System.out.println(stringEx.message.charAt(stringEx.message.length()-1));
        //indexOf() is a string method that returns the index of the first occurrence of the specified character or substring in the string.
        // System.out.println(stringEx.message.indexOf('w'));
        // System.out.println(stringEx.message.indexOf('l'));
        // System.out.println(stringEx.message.indexOf('w',10));
        // System.out.println(stringEx.message.indexOf("wonderful"));
        // System.out.println(stringEx.message.indexOf("wonderful",10));
        // System.out.println(stringEx.message.indexOf("wonderful",100));
        // System.out.println(stringEx.message.indexOf("wonderful",1000));
        // System.out.println(stringEx.message.indexOf("wonderful",10000));
        // System.out.println(stringEx.message.indexOf("wonderful",100000));

        //frequently used methods in String
        //1. charAt()
        //2. indexOf()
        //3. contains()
        //4. length()
        //5. substring()
        //6. concat()
        //7. endswith()
        //8. format
        //9. equals
        //10.getBytes
        

        String message="welcome$abc!1test";
        String message1="welcome$abc!1Test";

        System.out.println(message.charAt(0));
        System.out.println(message.indexOf('$'));
        System.out.println(message.compareTo(message1));
        System.out.println(message.concat(message1));
        System.out.println(message.contains("wel"));
        System.out.println(message.endsWith("test"));
        System.out.println(message.equalsIgnoreCase(message1));

    }
}
