const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors')
const config = require('./config')



// var massiveInstance = massive.connectSync(config.massiveConnection)
var app = module.exports = express()
var port = 3000

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.json())
app.use(cors())


var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
    connectionString: massiveUri
});

app.set('db', massiveServer);
var db = app.get('db');


var dbSetUp = require('./dbSetUp');
dbSetUp.run();





const productController = require('./productController')
app.get('/api/products', productController.getProducts)
app.get('/api/product/:id', productController.getProductsById)



app.listen(port,function(){
  console.log('listening on 3000')
})
