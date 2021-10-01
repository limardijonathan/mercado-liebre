const express = require('express');
const app = express();
const path = require('path');

const staticFiles = express.static('public');
app.use(staticFiles);



app.get('/home', (req,res) => {
    const fileToSend = path.join(__dirname, '/views/home.html')
    res.sendFile(fileToSend);
});

app.get('/', (req,res) => {
    const fileToSend = path.join(__dirname, '/views/home.html')
    res.sendFile(fileToSend);
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


app.listen(process.env.PORT || 3030, () => 
console.log('servidor running')
);
