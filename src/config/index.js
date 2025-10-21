const mongoose = require('mongoose');

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        console.log('MongoDB conectado com sucesso!');
    }catch (error) {
        console.error('Falha na conexão com o banco: ', error);
        process.exit(1);
    }
}

module.exports = connectDB;