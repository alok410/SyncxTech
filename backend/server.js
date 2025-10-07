import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

// ✅ Connect to MongoDB with async/await for better reliability
const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("Missing MONGO_URI in environment variables");
    }

    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (err: any) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

// 🔹 Define schema & model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  companyName: String,
  projectType: String,
  technology: String,
  purpose: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// 🔹 Routes
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, companyName, projectType, technology, purpose } = req.body;

  if (!name) return res.status(400).json({ error: "Name is required" });

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      companyName,
      projectType,
      technology,
      purpose,
    });
    const savedContact = await newContact.save();
    res.status(200).json({ success: true, data: savedContact });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/contact", async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Start server after DB connects
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
});
