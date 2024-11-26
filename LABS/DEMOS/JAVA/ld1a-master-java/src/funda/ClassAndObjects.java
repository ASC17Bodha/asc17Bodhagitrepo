package funda;

// import com.sun.xml.internal.bind.v2.runtime.output.SAXOutput;

class Car{
    //    String type="Gasoline";
//    int price=1000000;
    String type;
    int price;

    Car(){
        type="Gasoline";
        price=1000000;
    }
    void display(){
        System.out.println("Type of car:"+type);
        System.out.println("Price of the Car: "+price);
    }
    @Override
    public  String toString(){
        String message="Type of car: "+ type+"\n price of the car: "+ price;
        return message;
    }
}
public class ClassAndObjects{
    public static void main(String[] args){
        Car car=null;
        car=new Car();
//        System.out.println("Type of car:"+car.type);
//        System.out.println("Price of Car:"+car.price);
          car.display();
        System.out.println(car);
        String message=car.toString();
        System.out.println(message);
        System.out.println(car);
    }

}
