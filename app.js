const express = require('express');
const app = express();

// La var cors nous sert à récupérer le module cors
var cors = require('cors')
app.use(cors())

app.use((req, res, next) => {
    console.log("Requête reçue");
    next()
})

app.use((req, res, next) => {
    res.status(201);
    next()
})

app.use((req, res, next) => {
    res.json({message : "Votre requête a bien été reçue :)"})
    next()
})

app.use((req, res) => {
    console.log('Réponse envoyée avec succès')
})

app.listen(3000, () => console.log("Server Started on : Port 3000"))

module.exports = app;