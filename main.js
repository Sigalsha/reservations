//reservations ex.

var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');


  // write your code here!

let findReservationName = function(reservationName) {
    reservationName = reservationName.toLowerCase();
    for (key in reservations) {
       let keyLowerCase = key.toLowerCase();
        if (keyLowerCase === reservationName) {
            return reservations[key];
        }
    }
    return null;
}


let addReservation = function(reservationName) {
    alert("there is nothing under your name");
    reservations[reservationName] = { claimed: true };
    alert("we added your new reservation");
}   


var claimReservation = function(reservationName) {
    let reservationInfo = findReservationName(reservationName);
    if (reservationInfo === null) {
        addReservation(reservationName);
    } else if (reservationInfo.claimed === true) {
        alert("welcome!");
    } else if (reservationInfo.claimed === false) {
        alert("your reservation exist, but was already claimed");
    }
}

claimReservation(name);

 

