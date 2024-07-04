const user = {
    username: "sagnik",
    logincount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from db");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Sagnik",12,true)
const UserTwo = new User("Chaiaurcode",11,true)

console.log(userOne.constructor);
// console.log(UserTwo);