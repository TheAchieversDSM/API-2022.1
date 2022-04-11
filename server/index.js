const userRoutes = require("./routes/userRoutes")


const cors = require("cors")
const express = require("express");
const app = express();


app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.use("/novocolaborador",userRoutes)


app.listen(5000 , ()=> console.log('Servidor rodando'))
app.use(cors());