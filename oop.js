//constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    };
}


//instantiere

const book1 = new Book("Prima", "Dan Brown", 2009);

console.log(book1);
console.log(Object.values(book1));
console.log(book1.getSummary());