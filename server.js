//Define Dependencies
const { response } = require('express');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

//Set Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Create object for reservation
const reservation = [{
    name: '',
    phone: '',
    email: '',
    identification: '',
}];

const waitList = [{
    name: '',
    phone: '',
    email: '',
    identification: '',
}];


//create routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/reservation.html', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));

app.get('/tables.html', (req, res) => {
    console.log("This!")
    res.sendFile(path.join(__dirname, 'tables.html'))

});

app.get('/reservation', (req, res) => res.json(reservation))

app.post('/tables.html', (req, res) => res.json(reservation))

//Create POST

app.post('/tables', (req, res) => {
    const newReservation = req.body;
    console.log(newReservation)
    console.log(reservation.length);
    if (reservation.length < 5) {
        reservation.push(newReservation);
        res.json(newReservation);

    } else {
        waitList.push(newReservation)
        res.json(newReservation);
    }
}
);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))




