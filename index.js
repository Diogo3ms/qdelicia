const express = require("express"); //preciso de express
const app = express(); //variável app utilizará express
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://diogo:diogo3@cluster0.ovw3k.mongodb.net/test";
const Menu = require("./Controllers/menu_do_dia");
const user = require("./Controllers/utilizadores");
const auth = require("./codigo");
const mongoose = require("mongoose");
app.use(express.json())
const port = 4000;
const dbName = "qdelicia"; //Colocar o nome da Base de dados em Questão
const connect = mongoose.connect(url, { dbName: dbName, useNewUrlParser: true, useUnifiedTopology: true})

//const dbName = "qdelicia";
// MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
//     if (err == null) {
//     console.log("Connected correctly to server");
//     const db = client.db(dbName); //Ligar à Base de Dados Escolhida
//     const collection = db.collection("qdelicia"); //Ligar à collection 
//     app.set('collection', collection);
//     }    
//     });

    connect.then((db) => {
        console.log("Connected correctly to server");
        app.use("/utilizadores",user)
        app.use(auth);
        app.use('/Menu',Menu)
        })
    
app.listen(port, () => console.log('QDelicia Diogo Marques'+port))