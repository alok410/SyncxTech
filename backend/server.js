const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ MongoDB connection with detailed console logs
const connectDB = async () => {
  try {
    console.log("🔄 Attempting MongoDB connection...");
    console.log("🌐 MONGO_URI:", MONGO_URI ? "Loaded ✅" : "Missing ❌");

    if (!MONGO_URI) {
      throw new Error("MONGO_URI is missing in environment variables.");
    }

    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connection established successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
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
  } catch (err) {
    console.error("❌ Error saving contact:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    console.error("❌ Error fetching contacts:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start server only after DB connects
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
});
