
require('dotenv').config()
const express = require('express');
const app = express();
app.use(express.json());






const router = express.Router();




router.post('/login', (req, res) => {
return res.status(200).send({ message: 'ok', token: newToken })
}); 




const port = process.env.PORT;


app.listen(port, () => {
   console.log(`servidor corriendo ${port}`)
})
