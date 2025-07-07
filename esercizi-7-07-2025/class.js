class User {

//il costruttore inizializza gli attributi dell'utente
constructor(firstName, lastName, age, location) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.location = location;
}

//metodo per confrontare l'età con un altro utente
compareAge(otherUser) {
if (this.age > otherUser.age) {

//se l'utente corrente è più vecchio
    return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
} else if (this.age < otherUser.age) {

//se l'utente corrente è più giovane
    return `${this.firstName} è più giovane di ${otherUser.firstName}`;
} else {

//se hanno la stessa età
    return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
}
}
}

//creazione di due oggetti User di esempio
const user1 = new User("Cristiano", "Ronaldo", 40, "Madeira");
const user2 = new User("Lionel", "Messi", 38, "Rosario");

//esecuzione del confronto e stampa del risultato
console.log(user1.compareAge(user2));  //Output: Cristiano è più vecchio di Messi
