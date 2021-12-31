var express = require('express'); 
var router = express.Router();
var utilizadores = require("../Models/utilizadores")

router.post("/", (req, res) => {
    utilizadores.create(req.body).then(result=>{
    res.status(200).json(result);
  })  
  .catch(()=>{
    /*EXTRA*/ res.status(400).send("erro A operação não foi. realizada Algo está errado") 
})
});
module.exports = router;