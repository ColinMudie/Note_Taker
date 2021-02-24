const db = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        db.push(req.body);
        res.json(true);
        console.log(__dirname + '../');
        console.log(db);
        
        fs.writeFile('../Note_Taker/db/db.json', JSON.stringify(db), (err) => 
        err ? console.log(err) : console.log('written data to db.json'));
    });
};