import User from "./user";

class Student extends User{
    constructor(id, userName, email, password, subject, school){
        super(id, userName, email, password);
        this.subject = subject;
        this.school = school;
    }
    getProfile(){
        return[
            this.id,
            this.name,
            this.email,
            this.password,
            this.subject,
            this.school
        ]
    }
}

export default Student