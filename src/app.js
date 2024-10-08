const express = require('express');
const app = express();
app.use(express.json());

const router = express.Router();

router.post('/login', (req, res) => {

    const {usuario, clave} = req.body;
    if(!usuario||clave){
        return res.status(400).json({ err: "incompleto" })
    }

});


app.use(router);


module.exports = app