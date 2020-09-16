const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('recibido');


});

router.get('/profile', (req, res) =>{

});

module.exports = router;