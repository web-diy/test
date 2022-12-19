function User() {   
    
    let firstName;
    let surname;

    this.setFirstname = function (str) {
        firstName = str;
    };

    this.setSurname = function (str) {
        surname = str;
    };

    this.getFirstName = function () {
        return firstName;
    }

    this.getFullName = function () {
        return firstName + ' ' + surname;
    }
}

var user = new User();
user.setFirstname("Петя");
user.setSurname("Иванов");
console.log( user.getFirstName() ); // Петя Иванов
console.log( user.getFullName() ); // Петя Иванов