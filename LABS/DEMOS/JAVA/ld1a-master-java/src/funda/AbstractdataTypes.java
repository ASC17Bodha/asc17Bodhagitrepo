package funda;

public class AbstractdataTypes {

            byte byteVar= -128;
            short shortVar=3278;
            int intVar=12;
            long longVar=934872594458735L;
            float floatVar=3.14e+023f;
            double doubleVar=123.456;
            char charVar= 'A';
            boolean boolVar = true;
    public void  display(){

            System.out.println("byteVar " + byteVar);
            System.out.println("shortVar " + shortVar);
            System.out.println("longVar " + longVar);
            System.out.println("floatVar " + floatVar);
            System.out.println("doubleVar " + doubleVar);
            System.out.println("charVar " + charVar);
            System.out.println("boolVar " + boolVar);
        }
    public static void main(String[] args){
        AbstractdataTypes abstractdataTypes=new AbstractdataTypes();
        System.out.println(abstractdataTypes.longVar);
    }



}
