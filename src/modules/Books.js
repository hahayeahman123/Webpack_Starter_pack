class Books{
    constructor(name, author, year, pages){
        this.name=name;
        this.author=author;
        this.yearofPublication=year;
        this.pages=pages;
    }
    getInfo(){
        return
            `Knyga: ${this.name}, Autorius: ${this.author}, Metai: ${this.yearofPublication}, Puslapiai: ${this.pages}`
        
    }
}

export default Books