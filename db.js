const mongoose = require("mongoose");

async function run() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
}

// Export the function and the client
module.exports = { dbconnect: run };
