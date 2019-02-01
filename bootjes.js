let boats = [{
    "boatNumber": "boat 1",
    "tourNumber": "",
    "guestName": "",
    "status": "vacant",
    "checkInDate": "01/02/2019",
    "checkOutDate": "02/02/2019",
    "checkInTime": "",
    "checkOutTime": "",

  },
  {
    "boatNumber": "boat 2",
    "tourNumber": "",
    "guestName": "",
    "status": "vacant",
    "checkInDate": "01/02/2019",
    "checkOutDate": "02/02/2019",
    "checkInTime": "",
    "checkOutTime": "",
    "guest": "",
  },
  {
    "boatNumber": "boat 3",
    "tourNumber": "",
    "guestName": "",
    "status": "vacant",
    "checkInDate": "01/02/2019",
    "checkOutDate": "02/02/2019",
    "checkInTime": "",
    "checkOutTime": "",
    "guest": "",
  },
  {
    "boatNumber": "boat 4",
    "tourNumber": "",
    "guestName": "",
    "status": "vacant",
    "checkInDate": "01/02/2019",
    "checkOutDate": "02/02/2019",
    "checkInTime": "",
    "checkOutTime": "",
    "guest": "",
  }
];

function checkOverlap(verhuurtijdstip) {


  for (i = 0; i < boats.length; i++) {
    if (boats[i].checkInDate <= verhuurtijdstip && verhuurtijdstip <= boats[i].checkOutDate) {
      console.log((boats[i].boatNumber));

    }
  }
}

checkOverlap("01/02/2019");
