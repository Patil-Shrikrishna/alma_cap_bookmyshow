let movies = ['Suraj par mangal bhari', 'Tenet', 'The war with grandpa', 'The personal history of David Copperfield', 'Come Play']
let slots = ['10:00 AM', '01:00 PM', '03:00 PM', "08:00 PM"]
let seats = ['A1', 'A2', 'A3', 'A4', 'D1', 'D2']
let lastBooking = [
    [
        movie= "Suraj par mangal bhari", 
        slot="10:00AM", 
        seat={A1:0, A2:0, A3:5, A4:0, D1:0, D2:0}
    ],
    [
        movie= "Tenet", 
        slot="1:00AM", 
        seat={A1:0, A2:0, A3:0, A4:0, D1:0, D2:4}
    ],
    [
        movie= "The war with grandpa", 
        slot="03:00AM", 
        seat={A1:3, A2:0, A3:0, A4:0, D1:0, D2:0}
    ],
    [
        movie= "The personal history of David Copperfield", 
        slot="8:00AM", 
        seat={A1:0, A2:2, A3:5, A4:0, D1:0, D2:0}
    ],
    [
        movie= "Come Play", 
        slot="10:00AM", 
        seat={A1:0, A2:0, A3:5, A4:0, D1:4, D2:0}
    ]
]
exports.movies = movies;
exports.slots = slots;
exports.seats = seats;
exports.lastBooking = lastBooking;