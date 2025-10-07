import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "", {
  autoIndex: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Define a Mongoose schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  companyName: String,
  projectType: String,
  technology: String,
  purpose: String,
  createdAt: { type: Date, default: Date.now }
});

// Create a model
const Contact = mongoose.model("Contact", contactSchema);

// POST endpoint to receive form data
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, companyName, projectType, technology, purpose } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      companyName,
      projectType,
      technology,
      purpose
    });

    const savedContact = await newContact.save();
    res.status(200).json({ success: true, data: savedContact });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Optional: GET all contacts
app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
