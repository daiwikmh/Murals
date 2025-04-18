const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();

const filePath = "d:\\base\\zora\\server\\pixel.png";

// Check if required environment variables are present
if (!process.env.INFURA_API_KEY || !process.env.INFURA_API_SECRET) {
    console.error('Error: INFURA_API_KEY and INFURA_API_SECRET must be set in .env file');
    process.exit(1);
}

// Check if the file exists
if (!fs.existsSync(filePath)) {
    console.error(`Error: File "${filePath}" does not exist.`);
    process.exit(1);
}

async function uploadToIPFS() {
    try {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath));

        const response = await axios({
            method: 'post',
            url: 'https://ipfs.infura.io:5001/api/v0/add',
            data: formData,
            auth: {
                username: process.env.INFURA_API_KEY,
                password: process.env.INFURA_API_SECRET
            },
            headers: formData.getHeaders()
        });

        const { Name, Hash, Size } = response.data;
        console.log('File uploaded successfully!');
        console.log(`Name: ${Name}`);
        console.log(`Hash: ${Hash}`);
        console.log(`Size: ${Size} bytes`);
    } catch (error) {
        console.error('Failed to upload file to IPFS:', error.message);
        process.exit(1);
    }
}

uploadToIPFS();