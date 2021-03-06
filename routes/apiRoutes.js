const db = require('../db/db.json');
const fs = require('fs');
const uuid = require('uuid');
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.delete('/api/notes/:noteId', (req,res) => {
        const chosen = req.params.noteId;
        console.log(chosen);
        for (let i = 0; i < db.length; i++) {
            if (chosen == db[i].id){
                db.splice(i, 1);
                return res.send();
            } 
        }
        // return res.json(false);

    })


    app.post('/api/notes', (req, res) => {
        const newEntry = req.body;
        newEntry.id = uuid.v4();
        db.push(newEntry);
        res.json(true);
        
        
        // db.forEach((item, i) => {
        //     item.id = i + 1;
        // });
        console.log(db);
        fs.writeFile('../Note_Taker/db/db.json', JSON.stringify(db), (err) => 
        err ? console.log(err) : console.log('written data to db.json'));
    });
};