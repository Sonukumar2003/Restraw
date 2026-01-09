

import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        dbName: "RESTAURANT",
    }).then(() => {
        console.log("DataBase Connected Successfully");
    }).catch((e) => {
        console.log(`DataBase Connection Failed due to ${err}`);
    });
};
export default dbConnection;
