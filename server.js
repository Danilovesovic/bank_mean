const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() +""+file.originalname) 
    }
  })
const upload = multer({ storage: storage })

const app = express();

const db = mongojs('danilovadb',['bank']);

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

// ROUTES

app.get('/getAccounts',function (req,res) {
    db.bank.find({},function (err,docs) {
        res.send(docs);
    })
})
app.post('/deleteAccount',(req,res)=>{
    db.bank.remove({_id:mongojs.ObjectID(req.body.id)},(err,docs)=>{
        res.send(docs);
    })
})

app.post('/addAccount',upload.single('image'),function (req,res) {
    // console.log(req.file);
    // console.log(req.body);
    
    db.bank.insert({name:req.body.name,deposit:req.body.deposit,cCard:req.body.cCard,src:req.file.filename},(err,docs)=>{
        res.redirect('/')
    })
})
app.post('/getOne',function(req,res){
    db.bank.find({_id : mongojs.ObjectID(req.body.id)},function(err,docs){
        res.send(docs);
    })
})
app.post('/editAccount',function(req,res){
    db.bank.update({_id:mongojs.ObjectID(req.body.account._id)},{$set:{name:req.body.account.name,deposit:req.body.account.deposit,cCard:req.body.account.cCard}},function(err,doc){
        res.send(doc)
    })
})
app.listen(3000,()=>{
    console.log('Listening on port 3000');
})
