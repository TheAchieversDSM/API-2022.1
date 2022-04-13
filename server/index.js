const userRoutes = require("./routes/userRoutes")
const loginRoute = require("./routes/loginRoute")
const precad1Route = require("./routes/preCad1Route")
const precad2Route = require("./routes/preCad2Route")

const cors = require("cors")
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/novocolaborador", userRoutes)
app.use("/login", loginRoute)
app.use("/precad1", precad1Route)
app.use("/precad2", precad2Route)

app.listen(5000, () => console.log('Servidor rodando'))