const db = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.get('/api/notes/:noteId', (req,res) => {
        const chosen = req.params.noteId;
        console.log(chosen);
        for (let i = 0; i < db.length; i++) {
            if (chosen == db[i].id){
                return res.json(db[i])
            } 
            
        }
        // return res.json(false);

    })


    app.post('/api/notes', (req, res) => {
        db.push(req.body);
        res.json(true);
        console.log(__dirname + '../');
        console.log(db);
        
        db.forEach((item, i) => {
            item.id = i + 1;
        });
        console.log(db);
        fs.writeFile('../Note_Taker/db/db.json', JSON.stringify(db), (err) => 
        err ? console.log(err) : console.log('written data to db.json'));
    });
};