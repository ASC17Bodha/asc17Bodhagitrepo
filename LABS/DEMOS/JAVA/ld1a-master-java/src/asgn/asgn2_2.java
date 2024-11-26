package asgn;
import java.util.*;

    public class asgn2_2 {
    
        public String welcomeMessage(String name) {
            return "Hello " + name + ", Welcome to Java World!";
        }
        
        public int findLargest(int num1, int num2, int num3) {
            return Math.max(Math.max(num1, num2), num3);
        }
        
        public String numberToWords(int number) {
            String[] words = {"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
            
            if (number < 100 || number > 999) {
                return "Please enter a 3-digit number";
            }
            
            int digit1 = number / 100;
            int digit2 = (number / 10) % 10;
            int digit3 = number % 10;
            
            return words[digit1] + " " + words[digit2] + " " + words[digit3];
        }
        
        public static void main(String[] args) {
            asgn2_2 ops = new asgn2_2();
            
            Scanner sc=new Scanner(System.in);
            String name= sc.nextLine();
            System.out.println(ops.welcomeMessage(name));
            
         
            System.out.println("Largest number is: " + ops.findLargest(45, 78, 23));
            
            int n= sc.nextInt();
            System.out.println(ops.numberToWords(n));
        }
    }
