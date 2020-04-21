//constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    };

//getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
}

//getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
};

//revise / change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}


//instantiere

const book1 = new Book("Prima", "Dan Brown", 2009);

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book1);
book1.revise("2018");
console.log(book1);