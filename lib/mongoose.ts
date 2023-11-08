import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
	if (!process.env.MONGGO_DB_URL) return console.log("Monggo url not found");
	if (isConnected) return console.log("Already connected to MongoDB");

	try {
		await mongoose.connect(process.env.MONGGO_DB_URL);
		isConnected = true;
		console.log("connected try to MonggoDB");
	} catch (error) {
		console.log(error);
	}
};
