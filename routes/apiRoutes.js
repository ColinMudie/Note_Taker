const noteData = [
    {
        noteTitle: 'Hello World!',
        noteText: 'hello world but smaller'
    }
]

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));
}