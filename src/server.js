const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT||3000;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const sendinblueUsername = process.env.SENDINBLUE_USERNAME;
const sendinbluePassword = process.env.SENDINBLUE_PASSWORD;

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: sendinblueUsername,
    pass: sendinbluePassword,
  },
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();

app.use(cors());
app.use(express.json());

// Configure multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/saveAndSendEmail', upload.single('attachment'), async (req, res) => {
  try {
    const { recipients, subject, message } = req.body;

    const database = client.db('emaildb');
    const collection = database.collection('dataemail');

    const result = await collection.insertOne({
      recipients,
      subject,
      message,
      timestamp: new Date(),
    });

    console.log('Data saved to MongoDB:', result.insertedId);
    console.log('Insert result:', result);

    const mailOptions = {
      from: sendinblueUsername,
      to: recipients,
      subject: subject,
      text: message,
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
        },
      ],
    };

    const emailResult = await transporter.sendMail(mailOptions);
    console.log('Email sent:', emailResult);

    res.status(200).json({ message: 'Data saved and email sent successfully' });
  } catch (error) {
    console.error('Error saving data and sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
