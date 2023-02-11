

//server creation
//HTTP module
//1.http
// const http=require('http');
// const fs=require('fs');
// const server=http.createServer((req,res)=>{
//    console.log("request has been made from broswser to server");
//    //console.log(req.method);
//     //console.log(url);
//    res.setHeader('Content-Type','text/html');
//    res.write('<h1>hello lily </h1');
//    res.write('<p >m moti but not fatty </p>')
//     res.end();
// })
// server.listen(3000,'localhost',()=>{
//   console.log('server is listen on port 3000');
// });

//server creation
//HTTP module
//1.http
// const http=require('http');
// const fs=require('fs');
// const server=http.createServer((req,res)=>{
//    //console.log("request has been made from broswser to server");
   //console.log(req.method);
    //console.log(url);
  //res.setHeader('Content-Type','text/html');
 // res.write('<h1>hello lily </h1');
  //res.write('<h2>m moti but not fatty </h2>');
  //res.end();
//   fs.readFile('/.views/index.html',(err,fileData)=>{
//     if(err){
//           console.log(err);

//     }else{
//       res.write(fileData);
//       res.end();
//     }
//   })
// })
// server.listen(3000,'localhost',()=>{
//   console.log('server is listen on port 3000');
// });

// import{x} from "./hello"
// const hello=require('./hello')


// var x=20
// const arr=[2,4,5,3,7,9,3,8]
// console.log(arr)
// console.log(hello.z())
// for(i=0;i<5;i++){
//      console.log(i)
// }
// arr.filter(item=>{
//     console.log(item)

// })

// let result=arr.filter(item=>{
//        return item===3;
// })
// let result=arr.filter(item=>{
//     return item>=3;
// })
// console.log(result)
// const fs=require('fs')
// console.log("code step by step")

// fs.writeFileSync("hello takila.txt","code for takila")

// const fs=require('fs')
// console.log("->> see my file",__filename)
// fs.writeFileSync("hello.txt","I'm not your bff")

// // const fs=require('fs')
// console.log("->",__dirname)
// fs.writeFileSync("hello.txt","I'm not your bff")

// const gs=require('fs').writeFileSync
// gs("vtou.txt","u don't hit me")
 


// make basic server

// const http=require('http')
// http.createServer().listen(4000);


// const http=require('http')
// http.createServer((req,resp)=>{
//     resp.write("hello i'm your dorame")
//     resp.end()
// }).listen(4000)

// const http=require('http')
// function datacon(req,resp){
//     resp.write("hello i'm your dorame")
//     resp.end()
// }
// http.createServer(datacon).listen(4000)


// const http=require('http')
// const datacon=(req,res)=>
// {
//     res.write("hello i'm your dorame");
//     res.end();
// }
//     http.createServer(datacon).listen(4000)

// const colors=require('colors')
// console.log("hello dorame".blue)

//Nodemon  saving module

console.log("Hello dorame");

// / var myModule=require('./server.js')
// console.log(myModule.myText)

//exports.myText="hello";
//var fs=require('fs')
//var data=require('./data.json')
//console.log(data.name)
//fs.readFile('./data.json','UTF-8',(err,data)=>{
    //var data=JSON.parse(data)
   // console.log(data)
//})

//read a file:
//var fs=require('fs')
//fs.readdir("c:/",(err,data)=>{
   // console.log(data)
//})

//write a file:
//var fs=require('fs')

//var data={  
    //name:'mota baccha' (data.json it takes your data only from data.json file not from data)


//}
//fs.writeFile('./data.json',JSON.stringify(data),(err)=>{
 //   console.log('hello mota baccha',err)
//})


//var express=require('express')

// var module=express()
// module.use(express.static(__dirname))
// server=module.listen(3000,(err)=>{
//    console.log('server is listening on port 3000:',server.address().port)
// }) 
// const fs=require('fs');
// const http=require('http');
// const server=http.createServer((req,res)=>{
//    console.log("request from client is receiving")
//      fs.readFile('./views/index.html',(err,fileData)=>{
//       if(err){
//          console.log(err)
//       }
//       else{
//          res.write(fileData)
//          res.end()
//       }
//      })
// });
