const express =require('express');
const app = express();
const port=3000;
app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/about.html');
});
app.get('/home',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});
app.get('/externalLinks',(req,res)=>{
    res.sendFile(__dirname + '/externalLinks.html');
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
});
