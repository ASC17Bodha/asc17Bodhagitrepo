package collections;

//What is abstraction?
//Abstraction is the process of hiding the implementation details and showing only functionality to the user.
//Abstraction is achieved by using abstract classes and interfaces.
public class AbstractionWithInterfaceEx {
    public static void main(String[] args) {
        RegularAccount savingsAccount= new RegularAccount();
        savingsAccount.displayAccountInfo();
        savingsAccount.transferAmount();
        savingsAccount.checkAccountBalance();
        savingsAccount.withdraw();
    }
}

//what is interface?
//Interface is a reference type in Java. It is similar to class. It is a collection of abstract methods.
//Interface is used to achieve abstraction.
//Interface is used to achieve multiple inheritance.
//Interface is used to achieve loose coupling.
//Interface is used to achieve security.
interface  Netbanking{
    public abstract void displayAccountInfo();
    void transferAmount();
    void checkAccountBalance();
}
interface DebitCard{
    public void checkAccountBalance();
    public void withdraw();
}

//Abstract class
//An abstract class is a class that is declared with the abstract keyword.
//Abstract class cannot be instantiated.
//Abstract class can have abstract and non-abstract methods.
//Abstract class can have constructors and static methods also.
//Abstract class can have final methods which will force the subclass not to change the body of the method.
//Abstract class can have final variables.
abstract class SavingsAccount implements Netbanking,DebitCard{
    @Override
    public void displayAccountInfo() {
        System.out.println("Displaying account info");
    }   

    @Override
    public void transferAmount() {
        System.out.println("Transferring amount");
    }
    @Override
    public void checkAccountBalance() {
        System.out.println();
    }
    @Override
    public void withdraw() {
        System.out.println("Withdrawing amount");
    }
}
class RegularAccount extends SavingsAccount{
    @Override
    public void checkAccountBalance() {
        System.out.println("Checking account balance");
    }
}