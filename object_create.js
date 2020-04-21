//Object Of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}.`;
    },
    getAge: function() {
            const years = new Date().getFullYear() - this.year;
            return `${this.title} is ${years} years old.`;
    }
};

//create object
//const book1 = Object.create(bookProtos);
//book1.title = "Book one";
//book1.author = "Dan Brown";
//book1.year = "2013";

//console.log(book1);

const book1 = Object.create(bookProtos, {
    title: { value: "Book One" },
    author: { value: "Dan Brown" },
    year: { value: 2013 }
});

console.log(book1);





