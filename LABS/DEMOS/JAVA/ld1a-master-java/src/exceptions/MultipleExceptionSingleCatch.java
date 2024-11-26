package exceptions;

import java.util.*;


class Test50{
    int value= 10;
}

public class MultipleExceptionSingleCatch {
    public static void main(String[] args) {
        Test50 test50 = new Test50();
        try {
            System.out.println(test50.value);
            int[] arr = new int[5];
            arr[10] = 10;
        } catch (ArrayIndexOutOfBoundsException | NullPointerException e) {
            System.out.println("ArrayIndexOutOfBoundsException or NullPointerException");
        }
}
}
