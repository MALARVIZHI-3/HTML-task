
// Define a Book class
class Book {
    constructor(title, author, publishedYear) {
      this.title = title;
      this.author = author;
      this.publishedYear = new Date(publishedYear); // store as Date object
    }
 
    getSummary() {
      return `${this.title} by ${this.author}, published in ${this.publishedYear.getFullYear()}`;
    }
  }
 
  // 2) Define a subclass EBook that extends Book
  class EBook extends Book {
    constructor(title, author, publishedYear, fileSize) {
      super(title, author, publishedYear); // calling parent constructor
      this.fileSize = fileSize;
    }
 
    // overriding getSummary
    getSummary() {
      return `${this.title} by ${this.author}, published in ${this.publishedYear.getFullYear()} [File Size: ${this.fileSize}MB]`;
    }
  }
 
  // 3) Create multiple instances of Book and EBook
  const book1 = new Book("The Alchemist", "Paulo Coelho", "1988-01-01");
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "1960-07-11");
 
  const ebook1 = new EBook("JavaScript Basics", "John Doe", "2020-05-20", 2);
  const ebook2 = new EBook("Learn React", "Jane Smith", "2022-03-15", 5);
 
  // 4) Call their methods
  console.log(book1.getSummary());
  console.log(book2.getSummary());
 
  console.log(ebook1.getSummary());
  console.log(ebook2.getSummary());
 
  // Demonstrating this and super() clearly
  class SpecialEBook extends EBook {
    constructor(title, author, publishedYear, fileSize, format) {
      super(title, author, publishedYear, fileSize); // super() to call parent constructor
      this.format = format;
    }
 
    getSummary() {
      // Using super.getSummary() to reuse parent method
      return `${super.getSummary()} [Format: ${this.format}]`;
    }
  }
 
  const specialEBook = new SpecialEBook("Advanced JS", "Tech Guru", "2023-08-01", 10, "PDF");
 
  console.log(specialEBook.getSummary)
