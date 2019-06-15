const express = require('express')
const dns = require ('dns')

const app = express()
app.get('/', function(req,res){
res.send('localhost:3000/votrecible.com')
})
app.get('/:id', function(req,res){
  console.log("Recupération d'information chez : " +req.params.id)
  var url = req.params
  console.log(url.id)
  
dns.resolve4(req.params.id, (err, addresses) => {
  if (err) throw err;

  res.send("L'adress Ip du serveur DNS à que vous chercher :" +addresses  +"Regardez dans le console aussi")

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log("Adress en String "+hostnames)
    });
  });
});
})
app.listen(3000, () => {
  console.log('Ouvez dans votre navigateur localhost:3000');
});