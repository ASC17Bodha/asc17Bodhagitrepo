package asgn;

public class asgn1_2 {
    public static void displayHighest(String[] names,int[] marks){
        int max=marks[0],maxindex=0;
        for (int i = 0; i < 3 ; i++) {
            if(marks[i]>max){
                max=marks[i];
                maxindex=i;
            }
        }
        System.out.println("Topper is "+names[maxindex]);
    }
    public static void main(String[] args){
        Student s1=new Student("Rajat", "Haliyal", 2500);
        Student s2=new Student("nits", "Hospet", 2500);
        Student s3=new Student("Harsh", "Nagpur", 2500);
        s1.setMarks(65, 75, 85);
        s2.setMarks(30, 65, 90);
        s3.setMarks(90, 40, 20);
        int marks[]=new int[3];
        String names[]=new String[3];
        marks[0]=s1.getTotalMarks();
        marks[1]=s2.getTotalMarks();
        marks[2]=s3.getTotalMarks();
        names[0]=s1.getName();
        names[1]=s2.getName();
        names[2]=s2.getName();
        displayHighest(names, marks);
        s1.display();
        s1.getResult();
        s2.getResult();
        s3.getResult();
    }
}

class TestMain{
    int marks1,marks2,marks3;
    TestMain(int marks1,int marks2,int marks3){
        this.marks1=marks1;
        this.marks2=marks2;
        this.marks3=marks3;
    }
    void setmarks(int marks1,int marks2,int marks3){
        this.marks1=marks1;
        this.marks2=marks2;
        this.marks3=marks3;
    }
    int getSum(){
        return marks1+ marks2 + marks3;
    }
    String Test(){
        if((getSum()/3)<60 || marks1<60 || marks2<60 || marks3<60){

            return "fail";
        }
        else {
            return "pass";
        }
    }

    
}

class Student{
    int studentId=0;
    String studentName;
    String city;
    int marks1,marks2,marks3;
    float feePerMonth;
    TestMain testmain;
    static int id=0;
    boolean isEligibleForScholarship=false;
    Student( String studentName,String city,int marks1, int marks2,int marks3, float feePerMonth,boolean isEligibleForScholarship){
        id++;
        this.studentId=id;
        this.studentName=studentName;
        this.marks1=marks1;
        this.marks2=marks2;
        this.marks3=marks3;
        this.feePerMonth=feePerMonth;
        this.isEligibleForScholarship=isEligibleForScholarship;
        this.testmain=new TestMain(marks1,marks2,marks3);
    }
    Student( String studentName,String city, float feePerMonth){
        id++;
        this.studentId=id;
        this.studentName=studentName;
        this.city=city;
        this.feePerMonth=feePerMonth;
        this.testmain=new TestMain(marks1,marks2,marks3);
    }
    void setName(String name){
        this.studentName=name;
    }
    void setCity(String city){
        this.city=city;
    }
    void setMarks(int marks1,int marks2,int marks3){
        this.marks1=marks1;
        this.marks2=marks2;
        this.marks3=marks3;
        this.testmain.setmarks(marks1, marks2, marks3);
    }

    void setAnualFee(float feePerMonth){
        this.feePerMonth=feePerMonth;
    }
    public int[] getMarks(){
        int marks[]=new int[3];
        marks[0]=marks1;
        marks[1]=marks2;
        marks[2]=marks3;
        return marks;
    }
    float getAnualFee(){
        return this.feePerMonth*12;
    }
    int getTotalMarks(){
        int markssum[]=getMarks(),sum=0;
        for(int i=0;i<markssum.length;i++){
            sum+=markssum[i];
        }
        return sum;
    }
    int getAverage(){
        return(getTotalMarks()/3);
    }
    void getResult(){
        System.out.println(testmain.Test());
    }
    String getName(){
        return studentName;
    }
    void display(){
        System.out.println("Name: "+studentName+"\n"+"City: "+ this.city+ "\n"+"Totalfee: "+getAnualFee() + "\nMarks: "+ marks1+" "+marks2+' '+marks3);
    }
}


