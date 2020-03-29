const Party = require("express").Router();
const db = require("../../db");

Party.get("/", (req, res) => {
  let data=[];
  db.all('select * from party',(err,rows)=>{
    if(err){
      console.log(err)
    }
    console.log(rows)
    rows.forEach((row)=>{
      data.push({row})
    })
  })
  console.log(data)
  res.render("addition/party",{data});
});

Party.post("/Add", (req, res) => {
  let data=[];
  db.run('insert into party (p_name,p_pending_amount) VALUES(?,?)',[req.body.p_name,req.body.p_amount],(err)=>{
    if(err){
      console.log(err);
    }
    db.all('select * from party',(err,rows)=>{
      rows.forEach((row)=>{
        data.push({row})
      })
      res.send({success:true,msg:'Party Added.',data})
    })
  })
});

module.exports = Party;
