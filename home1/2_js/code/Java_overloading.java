public class Java_overloading 
{
    Java_overloading()
    {
        this.bark();
    }
    void bark() 
    {
        System.out.println("�޲���");
        this.bark("female", 3.4);
    }
    void bark(String m,double l)
    {
        System.out.println("������������String �� double");
        this.bark(5, "China");
    }
    void bark(int a,String n)
    {
        System.out.println("������������int �� string");
        this.bark("5", "China");
    }

    String bark(String a,String n)
    {
        System.out.println("������������String �� String ");
        return n;
    }

    public static void main(String[] args)
    {
        Java_overloading dog = new Java_overloading();
        
        String n = dog.bark("5", "China");
        System.out.println(n);
    }
}

