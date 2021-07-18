// Created a class caled Media wich contains constructor() method that takes one parameter(title)
// Inside the constructor, set the values for Media properties that Book, CD, and Movie share
// Created getter for the title, isCheckedOut, and ratings properties. Each getter return the value saved to the matching property. 
// created setter for the isCheckedOut property
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = true;
      this._ratings = [];
    }
    
    get title() {
      return this._title;
    }
    
    get isCheckedOut() {
      return this._isCheckedOut;
    }

    get ratings() {
      return this._ratings;
    }

    set isCheckedOut(check) {
      this._isCheckedOut = check;
    }

    
    // created a method named toggleCheckOutStatus that changes the value saved to the _isCheckedOut property
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }

   /* 
   toggleCheckOutStatus() {
      if (this._isCheckedOut === true)  {
          this._isCheckedOut = false;
      } 
      else {
          this._isCheckedOut = true;
      }
  }*/

  // Created a method named getAverageRating()
  // Used the reduce method to find the sum of the ratings array.
  // Divided this sum by the length of the ratings array, and returned the result.
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((Sum, rating) => Sum + rating, 0);
      return ratingsSum / this._ratings.length;
    }

    //added a method named addRating that accepts one argument and uses .push() to add it to the end of the ratings array
  addRating(ratings) {
    this._ratings.push(ratings)
}
}; 
  // Created a Book class that extends Media
  // Inside the Book class, created a constructor that accepts three arguments
  // Used the remaining arguments to set the author and pages properties in Book.
  //Added two new getters to the Book class. Each getter return the value saved to its matching property.
  class Book extends Media {
    constructor(title, author, pages) {
      super(title); // Called super on the first line of the Books‘s constructor method. Pass it the argument that the parent constructor uses - title.
      this._author = author;
      this._pages = pages;
    }
    
    get author() {
      return this._author;
    }
    
    get pages () {
      return this._pages;
    }
  };
  
  // Created a Movie class that extends Media
  // Inside the Book class, created a constructor that accepts three arguments
  // Used the remaining arguments to set the director and runTime properties in Movie.
  //Added two new getters to the Movie class. Each getter return the value saved to its matching property.
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title); // Called super on the first line of the Movie‘s constructor method. Pass it the argument that the parent constructor uses - title.
      this._director = director;
      this._runTime = runTime;
    }
    
    get director() {
      return this._director;
    }
    
    get runTime() {
      return this._runTime;
    }
  };
  
  // Created a CD class that extends Media
  // Inside the CD class, created a constructor that accepts three arguments
  // Used the remaining arguments to set the artist and songs properties in CD.
  //Added two new getters to the CD class. Each getter return the value saved to its matching property.
    class CD extends Media {
    constructor(title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    
    get artist() {
      return this._artist;
    }
    
    get songs() {
      return this._songs;
    }
  }
  
  // Create a Book instance with properties (author, title, pages) and saved it to historyOfEverything variable
  const historyOfEverything = new Book('historyOfEverything', 'Bill Bryson', 544);

  //Call .toggleCheckOutStatus() on the historyOfEverything instance.
  historyOfEverything.toggleCheckOutStatus();

  // Log the value saved to the isCheckedOut property in the historyOfEverything instance.
  console.log(historyOfEverything.isCheckedOut);

  //Called .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.

  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);

  // Called .getAverageRating() on historyOfEverything. Log the result to the console.
  //Used .toFixed method to round the number

  console.log(historyOfEverything.getAverageRating().toFixed(2));

  // Created a Movie instance with properties (director, title, runtime) and saved it to a constant variable named speed
  const speed = new Movie('Speed', 'Jan de Bont', 116);

  // Called .toggleCheckOutStatus() on the speed instance.
  speed.toggleCheckOutStatus();

  // Loged the value saved to the isCheckedOut property in the speed instance.
  console.log(speed.isCheckedOut);

  // Called .addRating() three times on speed with inputs of 1, 1, and 5.
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);

  // Called .getAverageRating() on speed. Log the result to the console.
  console.log(speed.getAverageRating().toFixed(2));

  // Create a CD instance with properties (title, artist, songs) and saved it to historyOfEverything variable
  const divide = new CD('Divide', 'Ed Sheeran', 'Perfect');

  //Call .toggleCheckOutStatus() on the divide instance.
  divide.toggleCheckOutStatus();

  // Log the value saved to the isCheckedOut property in the divide instance.
  console.log(divide.isCheckedOut);

  //Called .addRating() three times on divide with inputs of 3, 6, and 4.

  divide.addRating(3);
  divide.addRating(6);
  divide.addRating(4);

  // Called .getAverageRating() on divide. Log the result to the console.
  //Used .toFixed method to round the number

  console.log(divide.getAverageRating().toFixed(2));