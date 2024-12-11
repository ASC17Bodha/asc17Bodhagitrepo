package multithreading;

public class MultithreadEx {
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getName());
        Thread.currentThread().setName("Misra");
        System.out.println(Thread.currentThread().getName()+ " starting the game");
        PlayerJalaj playerJalaj=new PlayerJalaj();
        PlayerAayus playerAayus=new PlayerAayus();
        playerJalaj.start();
        playerAayus.start();
        try{
            playerJalaj.join();
            playerAayus.join();
        }
        catch(InterruptedException interruptedException){
            interruptedException.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName()+ " ending the game");

    }
}
class Compute1{
    public void odd(){
        for(int i=1;i<=100;i+=2){
            Thread.currentThread().setName("Aayus");
            System.out.println("Aayus: " +i);
        }
    }
    public void even(){
        for(int i=0;i<=100;i+=2){
            Thread.currentThread().setName("jalaj");
            System.out.println("Jalaj: "+i);
        }
    }
}
class PlayerJalaj extends Thread{
    public void run(){
        Compute1 compute=new Compute1();
        compute.odd();
    }
    
}
class PlayerAayus extends Thread{
    public void run(){
        Compute1 compute=new Compute1();
        compute.even();
    }
}
