/*Define a class ArrayStore which contains an integer array as its instance variable. Create necessary methods for the following operations.
Accept 10 integers and store them into the array.
Display the elements of the array using while & for loops
Sort the array
Accept a number and return the number of times it occurs in the array
Insert a number into the array at a specified position
Return array that excludes duplicate elements in the original array. E.g. if the elements of the original array are [9,2,2,9,10,9] then return [9,2,10]

*/


package asgn;

public class asgn1_6 {
    public static void main(String[] args) {
        ArrayStore a=new ArrayStore();
        a.accept();
        a.display();
        System.out.println("\n");
        a.sort();
        a.display();
        System.out.println("\n");
        System.out.println(a.count(2));
        a.insert(2, 10);
        a.display();
        System.out.println("\n");
        a.removeDuplicate();
        a.display();
    }
}
class ArrayStore{
    int[] arr;
    public ArrayStore(){
        arr=new int[10];
    }
    public void accept(){
        for(int i=9;i>=0;i--){
            arr[i]=i;
        }
    }
    public void display(){
        for(int i=0;i<10;i++){
            System.out.println(arr[i]);
        }
    }
    public void sort(){
        for(int i=0;i<10;i++){
            for(int j=0;j<10;j++){
                if(arr[i]<arr[j]){
                    int temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
    }
    public int count(int n){
        int count=0;
        for(int i=0;i<10;i++){
            if(arr[i]==n){
                count++;
            }
        }
        return count;
    }
    public void insert(int n,int pos){
        for(int i=0;i<10;i++){
            if(i==pos){
                for(int j=9;j>i;j--){
                    arr[j]=arr[j-1];
                }
                arr[i]=n;
            }
        }
    }
    public int[] removeDuplicate(){
        int[] temp=new int[10];
        int k=0;
        for(int i=0;i<10;i++){
            int j;
            for(j=0;j<i;j++){
                if(arr[i]==arr[j]){
                    break;
                }
                else if(i==j){
                temp[k]=arr[i];
                k++;
            }
            }   
        }
            int[] res=new int[k];
            for(int l=0;l<k;l++){
                res[l]=temp[l];
            }
            return res;
    }   

}
