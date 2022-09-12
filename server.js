// //Nous sert à vérifier au sein que le fichier est bien lu 
// console.log("voila du code JS")
//Nous importons ensuite le module http

const http = require("http")
const app = require ('./app');

app.set('port', 3000)
const server = http.createServer(app)
console.log(server)



