package funda;
import java.util.*;

enum priority{
    High,
    Medium,
    Low
}
enum status{
    Open,
    InProgress,
    Closed
}

class Issue{
    int IssueId;
    String Title;
    String Description;
    priority Priority;
    status Status;
    String Asignee;
    Date date;
    static int count=0;
    Issue(){
        IssueId=count;
        Title="Issue Title "+count;
        Description="Issue Description"+count;
        Priority=Priority.High;
        Status=Status.Open;
        Asignee="Asignee"+count;
        date=new Date(2024,11,12);
        count++;
    }
    void display(){
        System.out.println("Issue Id:"+IssueId);
        System.out.println("Title:"+Title);
        System.out.println("Description:"+Description);
        System.out.println("Priority:"+Priority);
        System.out.println("Status:"+Status);
        System.out.println("Asignee:"+Asignee);
        System.out.println("Date:"+date);
    }

    @Override
    public String toString(){
        String message="Issue Id:"+IssueId+"\nTitle:"+Title+"\nDescription:"+Description+"\nPriority:"+Priority+"\nStatus:"+Status+"\nAsignee:"+Asignee+"\nDate:"+date;
        return message;
    }
}
// public class IssueObject {

//     public static void main(String[] args){
//         Issue[] issue=new Issue[3];
//         for(int i=0;i<issue.length;i++){
//             issue[i]=new Issue();
//         }
//         for(int i=0;i<issue.length;i++){
//             issue[i].display();
//             System.out.println("\nissue: "+issue[i]);
//             System.out.println("\ntoString: "+issue[i].toString()+"\n\n");
//         }
//     }
// }
public class IssueObject {
    public static void displayIssueById(Issue[] issues, int searchId) {
        for(Issue issue : issues) {
            if(issue != null && issue.IssueId == searchId) {
                issue.display();
                return;
            }
        }
        System.out.println("Issue with ID " + searchId + " not found");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array:");
        int size=sc.nextInt();
          sc.nextLine();
        Issue[] issue = new Issue[size];
        for(int i = 0; i < issue.length; i++) {
            issue[i] = new Issue();
        }
        for(int i=0;i<issue.length;i++){
            System.out.println("Enter the Title of the issue "+(i+1)+":");
            issue[i].Title=sc.nextLine();
            System.out.println("Enter the Description of the issue "+(i+1)+":");
            issue[i].Description=sc.nextLine();
            System.out.println("Enter the priority of the issue "+(i+1)+":");
            issue[i].Priority=priority.valueOf(sc.nextLine());
            System.out.println("Enter the status of the issue "+(i+1)+":");
            issue[i].Status=status.valueOf(sc.nextLine());
            System.out.println("Enter the asignee of the issue "+(i+1)+":");
            issue[i].Asignee=sc.nextLine();
            System.out.println("Enter the date of the issue "+(i+1)+":");
            issue[i].date=new Date(sc.nextInt(),sc.nextInt(),sc.nextInt());
        }
        int n=sc.nextInt();
        System.out.println("Enter the issue id to search:");
        displayIssueById(issue, n); 
    }
}


