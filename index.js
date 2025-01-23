// Først bruker vi 'require' for å referere til Express-biblioteket
//  (som ligger i node_modules):
const express = require('express');

// Deretter lager vi en ny instans av Express:
const app = express();

// Vi setter opp en enkel "rute" (route) som svarer på
// forespørsler til rotkatalogen, /:
app.get('/deltagere', (req, res) => {
    res.send(`
        <h3>Her er en liste av 4 elever i klassen:</h3>
        <li>Philip Naley</li>
        <li>Lucas Barter</li>
        <li>Michael Andre</li>
        <li>Filip Karlsen</li>
    `);
});

// Så starter vi serveren, som nå lytter på port 3000:
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});