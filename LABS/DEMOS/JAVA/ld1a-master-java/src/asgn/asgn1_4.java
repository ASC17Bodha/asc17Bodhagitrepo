
//Write a method which accepts a string as parameter and returns the number of words in it. For example, if the string is "Sum of 12 and 20 is 32", the method should return 4.
package asgn;

import java.util.*;

public class asgn1_4 {
    public int ReturnWords(String st){
        if(st==null || st.trim().isEmpty()){
            return 0;
        } 
        String[] words = st.trim().split("\\s+");
        int wordscount=0;
        for(String word:words){
            if(!word.matches("\\d+")){
                wordscount++;
            }
        }
        return wordscount;
    }
    public static void main(String[] args) {
        String st="Sum of 12 and 20 is 32";
        asgn1_4 a=new asgn1_4();
        System.out.println(a.ReturnWords(st));

    }
}
