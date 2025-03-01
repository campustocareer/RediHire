const { MongoClient } = require("mongodb");
require("dotenv").config();

console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging line

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MongoDB URI is missing!");
  process.exit(1); // Exit if URI is missing
}

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    console.log("Connecting to MongoDB...");
    await client.connect();

    const db = client.db("Redihire");
    const collection = db.collection("contacts");

    const { name, mobile, email, description } = JSON.parse(event.body);
    if (!name || !mobile || !email || !description) {
      return { statusCode: 400, body: JSON.stringify({ error: "All fields are required" }) };
    }

    await collection.insertOne({ name, mobile, email, description, createdAt: new Date() });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data stored successfully" }),
    };
  } catch (error) {
    console.error("Error storing data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server Error", details: error.message }),
    };
  } finally {
    await client.close();
  }
};
