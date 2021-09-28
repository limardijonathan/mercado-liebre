const express = require('express');
const app = express();
const path = require('path');

const staticFiles = express.static('public');
app.use(staticFiles);



app.get('/home', (req,res) => {
    const fileToSend = path.join(__dirname, '/views/home.html')
    res.sendFile(fileToSend);
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


app.listen(3030, () => 
console.log('servidor running')
);




/*


const listar = require("../listartareas");
const escribirJSON = require("../tareas");

switch (true) {
    case process.argv[2] === 'listar' :
        listar();
        break;

    case process.argv[2] === 'Agregar' :
        let variable = {"id": 2, "titulo": "Netflix","estado": "En curso"}        
        escribirJSON(variable);
        break;    

    case process.argv.length == 2 :
            console.log("Atencion - Tienes que pasar una accion")
            break;
    default:
        console.log("No entiendo que quieres hacer")
        break;        
}
*/