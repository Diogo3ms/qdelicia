const ficheiros = require("../shared/functions");
const {ementa} = require("../ementa");
var ObjectID = require('mongodb').ObjectID;
var express = require('express'); 
var router = express.Router();
var pratos = require("../Models/pratos")
//module.exports = function (app, pratos) {
//  ficheiros.ler().then(function(res){
//   menu = res;
// });
var menu = [];

    router.get('/',(req, res) => {   
      // pratos.find().toArray().then(result => {
      //   console.log(result)
      //  menu= result
      //  res.json(menu)})
      pratos.find({}).then(result => {
        console.log(result)
       menu= result
       res.json(menu)}).catch(()=>{
        /*EXTRA*/ res.status(400).send("erro A operação não foi. realizada Algo está errado")
      })
      });
      
    router.get('/:id',(req, res)=>{
      

      //pratos.find({Cod:parseInt(req.params.id)}).toArray().then(result => {
        pratos.find({Cod:parseInt(req.params.id)}).then(result => {
        console.log(result)
        resposta= result
       
       if (resposta==undefined){
        res.status(400).send("erro Este prato ainda não está disponivel no q delicia ")
    }else{
        
        res.json(resposta)
    }
      }).catch(()=>{
        /*EXTRA*/ res.status(400).send("erro A operação não foi. realizada Algo está errado")
      })
  });
  
    router.post("/", (req, res) => {
          const { Nome_do_prato,Preco,Regime,Ingredientes,Cod,catprato,tipo} = req.body;
          const refeicao =new ementa (Nome_do_prato,Preco,Regime,Ingredientes,Cod,catprato,tipo);
      console.log(menu);
        menu.push(refeicao);
        // ficheiros.gravar(menu));
        //pratos.insertOne(refeicao).then(result =>{
          pratos.create(req.body).then(result=>{
          res.status(200).json(result);
        })  
        .catch(()=>{
          /*EXTRA*/ res.status(400).send("erro A operação não foi. realizada Algo está errado") 
    })
  });
      router.patch("/:id", (req, res) => {
        var onde = { Cod: parseInt(req.params.id) }
        console.log('id: '+parseInt(req.params.id))
        pratos.updateOne(onde, { $set: req.body}, function(err,obj){
          console.log('matchedCount: ' + obj.matchedCount)
          console.log('modifiedCount: ' + obj.modifiedCount)
        }).catch(()=>{
         /*EXTRA*/ res.status(400).send("erro A operação não foi. realizada Algo está errado")
        }).then(()=>{
          res.status(200).json("Menu Atualizado com sucesso");
        })
    });
      // router.patch("/:id", async(req, res) => {
      //     try {
      //       var resposta = menu.find(function(e){
      //         return e.Cod==req.params.id;
      //       });
      //       await pratos.deleteOne({
      //         _id: new ObjectID(resposta._id)
      //       })
      //       console.log (resposta)
      //       if (req.body.Nome_do_prato != undefined) 
      //       { resposta.Nome_do_prato = req.body.Nome_do_prato;}
      //       if (req.body.Preco != undefined) {
      //       resposta.Preco = req.body.Preco; }
      //       if (req.body.Regime != undefined) {
      //       resposta.Regime = req.body.Regime;}
      //       if (req.body.Ingredientes != undefined) { 
      //       resposta.Ingredientes = req.body.Ingredientes;}
      //       if (req.body.Cod != undefined) {
      //       resposta.Cod = req.body.Cod;}
      //       if (req.body.catprato != undefined) {
      //       resposta.catprato = req.body.catprato;}
      //       if (req.body.tipo != undefined) {
      //       resposta.tipo = req.body.tipo; }
      //       pratos.insertOne(resposta).then()  
      //       pratos.find().toArray().then(result => {
      //         menu= result
      //        });
      //       res.status(200).json(menu);
      //     } catch (error) {
      //       res.status(400).send("erro A operação não foi. realizada Algo está errado"+error)  
      //     }
       
      // });
      router.put("/:id", (req, res) => {
            const { Nome_do_prato,Preco,Regime,Ingredientes,Cod,catprato,tipo} = req.body;
            const refeicao =new ementa (Nome_do_prato,Preco,Regime,Ingredientes,Cod,catprato,tipo);
           var putref =refeicao.returnall();
            pratos.updateOne({cod: req.params.id}, {$set:putref}).then(()=>{
              res.status(200).json(putref);
            }).catch(()=>{
        /*EXTRA*/ res.status(400).send("erro A operação não foi. realizada Algo está errado")
      })
        })    
      router.delete("/:id",(req, res) => {
            console.log('cod: ' + parseInt(req.params.id))
             pratos.deleteOne({
               Cod: parseInt(req.params.id)
             }).then((obj) =>
             {
               console.log('acknowledged: '+ obj.acknowledged)

               res.status(200).send("Removido com sucesso");
             }).catch(()=>{
              /*EXTRA*/ res.status(400).send("erro A operação não foi. realizada Algo está errado")
            })  
   })
    router.delete("/", (req, res) => {
          pratos.deleteMany({}).then(()=>{
            res.status(200).send("Removido com sucesso");
          }).catch(()=>{
            /*EXTRA*/ res.status(400).send("erro A operação não foi. realizada Algo está errado")
          })
    })
module.exports = router;