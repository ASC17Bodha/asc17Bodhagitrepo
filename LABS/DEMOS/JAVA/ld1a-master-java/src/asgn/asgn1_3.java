package asgn;

import java.util.Scanner;

public class asgn1_3 {
    public static void main(String[] args) {
        asgn1_3 a=new asgn1_3();
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        a.multiplication(n);
        a.multiplication2(n);
        a.multiplication3(n);
    }
    public void multiplication(int n){
        for(int i=1;i<=10;i++){
            System.out.println(n+"x"+i+"="+n*i);
        }
    }
    public void multiplication2(int n){
        int i=1;
        do { 
            System.out.println(n+"x"+i+"="+n*i);
            i++;
        } while (i<=10);
    }
    public void multiplication3(int n){
        int i=1;
        while(i<=10){ 
            System.out.println(n+"x"+i+"="+n*i);
            i++;
        }
    }
}
