class User{
    constructor(id, userName, email, password){ // objektiniam programavimui si funkcija bus pakvieta automatiskai ir pati pirma
        this.id =id;
        this.name = userName;
        this.email = email;
        this.password = password;
    }

    // geteriai
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }

    getProfile(){
        return[
            this.id,
            this.name,
            this.email,
            this.password
        ]
    }
    //metodai
    setUserName(userName){
        this.name=userName;
    }
}

export default User