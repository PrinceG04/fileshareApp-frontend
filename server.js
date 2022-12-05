const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3500;

const app = express();


// serving static file in middleware
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./templates/index.html'));
});


app.listen(PORT,()=>{
    console.log(`Server successfully started on http://localhost:${PORT}`)
})