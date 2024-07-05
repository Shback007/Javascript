class User{
    constructor(email,password){
        this.email = email;
        this.password= password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sagnik`
    }

    set password(value){
        this._password = value
    }
}

const sagnik = new User("s@sagnik.ai","abc")
console.log(sagnik.email);