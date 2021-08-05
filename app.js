import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Node app is working!</h1>');
});

app.listen(5000, () => {
    console.log('App is listening on port 5000!');
});