/* eslint-disable no-undef */
import mongoose from 'mongoose';

// 👉 DATABASE CONNECTION:
// Asynchronous Function To Connect To Database by mongoose:
export const connectDatabase = async () => {
  try {
    //// ⚙️ INITIATE DATABASE CONNECTION OBJECT /////////////////////////////
    const dataBaseConnection = await mongoose.connect(process.env.MONGO_URI);
    /////////////////////////////////////////////////////////////////////////

    // test:
    console.log(`database connected on: ${dataBaseConnection.connection.host}`);

    // catch error:
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
