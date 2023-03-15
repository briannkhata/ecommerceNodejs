const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const authRouter = require('./routes/authRoutes');
const { notFound, errorHandler } = require("./middlewares/errorHandler");
dbConnect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/v1/user/',authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
