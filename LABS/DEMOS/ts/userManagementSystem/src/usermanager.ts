import { User } from "./User";

 export class UserManager{
    private users:User[]=[];

    addUser(user:User):void{
        this.users.push(user);
        console.log("User",user.name,"added successfully ");
    }
    listUsers():User[]{
        return this.users
    }

    removeUser(user1:User):void{
        this.users=this.users.filter(user=>user.name!==user1.name);
        console.log("User",user1.name,"removed successfully");
    }

    searchUser(name1:string):User[]{
        // for(var i=0;i<this.users.length;i++){
        //     if(this.users[i].name.toLowerCase().startsWith(name1.toLocaleLowerCase())){
        //         console.log(" User",name1,"found ");
        //         return this.users[i];
        //     }
        // }
        // return null;
        const person=this.users.filter(user=>user.name==name1);
        return person;
    }
}

// let userManager=new UserManager();

// const user1:User={
//     name:"sanjay",
//     email:"san@123.xom",
//     password:"san@123",
//     age:23,
//     gender:"male",
//     cgpa:9
// }

// userManager.addUser(user1);
// console.log(userManager.listUsers());