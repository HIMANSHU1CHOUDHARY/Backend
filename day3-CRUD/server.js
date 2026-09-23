const express= require('express');
const app=express();

//midddleware for accepting json data
app.use(express.json());

let port=3000;

// let user=[{
//     "name":"bhai",
//     "age":20,
//     "id":1
// },{
//     "name":"varun",
//     "age":20,
//     "id":2
// }];

let user=[];

//get-read
app.get('/',(req,res)=>{
    const {id}=req.params;
    const title=req.body;
    res.send(user);

});


//create
app.post('/create',(req,res)=>{
    let body=req.body;
    user.push(body);
    res.send("user saved successfully");
  
});



//delete
app.delete('/delete/:id',(req,res)=>{
let {id}=req.params;
let userdata=user.filter((val)=>val.id!=id);
user=userdata;
res.send(user);
})

//update
app.put('/update/:id',(req,res)=>{
    let {id}=req.params;
    let {name}=req.body;
    let updatedUser=user.map((val)=>val.id == id?{...val,name}:val)
    res.send(updatedUser);
})
app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
});

