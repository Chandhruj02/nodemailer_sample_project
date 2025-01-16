require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Email Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Endpoint to Send Email
app.post("/api/send-email", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send({ success: false, message: "Invalid input." });
  }

  const code = Math.floor(1000 + Math.random() * 9000).toString();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Verification Code",
    text: `Hi ${name},\n\nYour verification code is: ${code}\n\nThank you!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, code });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).send({ success: false, message: "Failed to send email." });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
