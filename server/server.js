const express = require('express');
const multer = require('multer');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Multer setup for handling file uploads
const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage });

// Route to serve the frontend
app.use(express.static(path.join(__dirname, 'public')));

// POST endpoint to upload file to IPFS
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const { buffer, originalname } = req.file;

        // Call Infura's IPFS API
        const response = await axios.post(
            'https://ipfs.infura.io:5001/api/v0/add',
            buffer,
            {
                headers: {
                    'Content-Type': 'application/octet-stream',
                    Authorization: `Basic ${Buffer.from(`${process.env.INFURA_API_KEY}:${process.env.INFURA_API_SECRET}`).toString('base64')}`,
                },
            }
        );

        const { Name, Hash, Size } = response.data;
        res.json({ Name, Hash, Size });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to upload file to IPFS' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});