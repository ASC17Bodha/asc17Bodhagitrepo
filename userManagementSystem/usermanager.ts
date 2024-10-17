import { User } from "./User";

 export class UserManager{
    private users:User[]=[];

    addUser(user:User):void{
        this.users.push(user);
    }
    listUsers():User[]{
        return this.users
    }

    removeUser(name:string):void{
        this.users=this.users.filter(user=>user.name!==name);
    }


}

let userManager=new UserManager();

const user1:User={
    name:"sanjay",
    email:"san@123.xom",
    password:"san@123",
    age:23,
    gender:"male",
    cgpa:9
}

userManager.addUser(user1);
userManager.listUsers();