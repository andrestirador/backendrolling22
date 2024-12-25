const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("Base de Datos  onLine");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inciar DB");
  }
};

module.exports = {
  dbConnection,
};
