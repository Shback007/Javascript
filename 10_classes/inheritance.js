class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
    logOut(){
        console.log(`User ${this.username} has logged out`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123")
chai.logMe()
chai.addCourse()
chai.logOut()


const masalachai = new User("masalachai")

masalachai.logMe()

console.log(chai instanceof User);