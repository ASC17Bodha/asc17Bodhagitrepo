import { UserManager } from "./usermanager";

import { User } from "./User";



// creating manager instance
const UserManager1=new UserManager();


// creating user instances and adding them to the manager
const user2:User={
    name:"sanjay",
    email:"san@123.xom",
    password:"san@123",
    age:23,
    gender:"male",
    cgpa:9
}

UserManager1.addUser(user2);

let users :User[]=UserManager1.listUsers();


const user3:User={
    name:"nitish",
    email:"nit@123.xom",
    password:"nit@123",
    age:22,
    gender:"male",
    cgpa:10
}

UserManager1.addUser(user3);

users=UserManager1.listUsers();

console.log(users);


// searching user through searchmethod
console.log(UserManager1.searchUser("nitish"));


// removing user through remove method
UserManager1.removeUser(user3);

users=UserManager1.listUsers();
console.log(users);


