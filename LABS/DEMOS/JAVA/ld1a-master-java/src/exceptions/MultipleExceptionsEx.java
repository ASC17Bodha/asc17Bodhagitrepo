package exceptions;

import java.util.*;

import javax.swing.plaf.basic.BasicInternalFrameUI;

public class MultipleExceptionsEx {
    public static void main(String[] args){
        int num1=0;
        int num2=10;
        int values[]={10,20,30};
        try (Scanner scanner=new Scanner(System.in)){
            String  num1String=scanner.nextLine();
            num1=Integer.parseInt(num1String);
            System.out.println(num1/num2);
            System.out.println(values[3]);
        } catch (NumberFormatException numberFormatException) {
            System.err.println("Invalid value for number");
        }
            catch(ArithmeticException arithmeticException){
                System.err.println("Cannot divide by zero");
            }
            catch(Throwable exception){
                System.err.println("All exceptions(which are not handled above)");
            }

            System.out.println("Done");
    }
}
