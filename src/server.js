require('dotenv').config();
const buildApp = require('./app');
const connectDB = require('./config');

const start = async() => {
    const app = buildApp();
    const port = process.env.PORT || 3000;
    await connectDB();
    await app.listen({ port });
    console.log(`Server running on http://localhost:${port}`)
}

start();