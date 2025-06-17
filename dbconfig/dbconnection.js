import mongoose from "mongoose";

export default async function mongoConnect() {
	try {
		if (mongoose.connections[0].readyState) return;
		await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
		console.log("Connected to database");
	} catch (error) {
		console.log("Could not connect to database", error);
	}
}