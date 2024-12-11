package multithreading;

public class singlethreadEx {
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getName());
        Thread.currentThread().setName("main thread");
        System.out.println(Thread.currentThread().getName());
        Compute compute=new Compute();
        compute.odd();
        compute.even();
    }
    
}
class Compute{
    public void odd(){
        for(int i=1;i<=10;i+=2){
            System.out.println("odd: " +i);
        }
    }
    public void even(){
        for(int i=0;i<=10;i+=2){
            System.out.println("even: "+i);
        }
    }
}
