const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@cursonodejs.dl4yowp.mongodb.net/?retryWrites=true&w=majority`,
        );
        console.log('Conexão com o banco de dados estabelecida com sucesso');
    } catch (error) {
        console.log('Ocorreu um erro ao se conectar ao banco de dados: ',error);
    }
}

module.exports = connectToDatabase; 