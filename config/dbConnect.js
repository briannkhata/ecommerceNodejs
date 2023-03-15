const { default: mongoose } = require("mongoose");
const dbConnect = () => {
    try {
      const conn = mongoose.connect(process.env.MONGO_DB);
      console.log("Database Connected successfully");
    } catch (error) {
      console.log("Error connecting to database:", error);
    }
  };

  module.exports = dbConnect;