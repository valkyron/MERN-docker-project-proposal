const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URL);
    await mongoose.connect('mongodb://mongodb:27017/projectApp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
