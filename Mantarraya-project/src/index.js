const express = require('express');
const app = express();
const path = require('path')

//CONFIGURACIONES
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROUTES
app.use(require ('./routes/index'));


app.listen(3000);
console.log('Server on port', 3000);