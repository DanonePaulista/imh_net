require('dotenv').config();
const buildApp = require('./app');

const start = async() => {
    const app = buildApp();
    const port = process.env.PORT || 3000;
    await app.listen({ port });
    console.log(`Server running on http://localhost:${port}`)
}

start();