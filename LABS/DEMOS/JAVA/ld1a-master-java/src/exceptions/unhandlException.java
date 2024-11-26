package exceptions;
import java.util.*;

public class unhandlException {
    public static void main(String[] args){
        String testString="welcome";
        String UpperCase=testString.toUpperCase();
        System.out.println(UpperCase);
        System.out.println("Caller begin");
        called();
        System.out.println("Back to caller");
    }
    private static void called(){
        System.out.println("the calculator app");
        int num1=200,num2=0;
        int result=0;
        try{
            result =num1/num2;
        }
        catch(ArithmeticException e){
            System.out.println("Arithmaticexception"+e.getMessage());
        }
        System.out.println(result);
        System.out.println("Shutting the calculator");

    }
}
