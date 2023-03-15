const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const authRouter = require('./routes/authRoutes');
dbConnect();

app.use("/",(req,res)=> {
    res.send("Node ecommerce")
})

app.use('/api/user',authRouter);

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
