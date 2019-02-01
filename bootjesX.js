let occupiedBoats = [];

let boats = [{
    "boatNumber": "boat 1",
    "tourNumber": "",
    "guestName": "",
    "status": "vacant",
    "date": "01/02/2019",
    "checkInTime": "15:15",
    "checkOutTime": "16:33"

  },
  {
    "boatNumber": "boat 2",
    "tourNumber": "",
    "guestName": "",
    "date": "01/02/2019",
    "checkInTime": "15:40",
    "checkOutTime": "16:40",
  },
  {
    "boatNumber": "boat 3",
    "tourNumber": "",
    "guestName": "",
    "date": "",
    "checkInTime": "",
    "checkOutTime": ""
  },
  {
    "boatNumber": "boat 4",
    "tourNumber": "",
    "guestName": "",
    "date": "",
    "checkInTime": "",
    "checkOutTime": "",
  }
];

function checkOverlap(rentalDay, rentalTime) {


  for (i = 0; i < boats.length; i++) {
    if (boats[i].date === rentalDay) {
      if (boats[i].checkInTime <= rentalTime && rentalTime <= boats[i].checkOutTime)
        console.log("This boat is occupied:" + boats[i].boatNumber);
        //occupiedBoats.push(boats[i].boatNumber);

    }
    //return occupiedBoats;
  }
}

console.log(checkOverlap("01/02/2019", "16:26"));
