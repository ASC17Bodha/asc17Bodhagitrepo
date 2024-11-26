package inheritence;

public class Finalex {
    public static void main(String[] args) {
        new Derived2().Derived2Method2();
    }
    
}

final class TestMe{}

class Base2{
    public void Base2Method1(){
        System.out.println("base method 1");
    }
    public final void Base2Method2(){
        System.out.println("base2method");
    }   

}

class Derived2 extends Base2{
    @Override
    public void Base2Method1(){
        super.Base2Method1();
        System.out.println("Base2method1 overidden");
    }
    public final void Derived2Method2(){
        super.Base2Method1();
        super.Base2Method2();
        System.out.println("Base2Method2");
        super.Base2Method1();
        super.Base2Method2();
    }
}
