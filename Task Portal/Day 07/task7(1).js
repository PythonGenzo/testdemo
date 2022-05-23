// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:


class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

    getRating(n){
        return "PG"+this.rating;
    }
}

let M1= new Movie("Casino Royale","Eon Productions",13)
console.log(M1.getRating(13));