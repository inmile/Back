const monggose = require('mongoose');

const conectarDB = async () => {
    try {
        const connection = await monggose.connect(
            "mongodb+srv://FelipeUnab:huella12@cluster0.ntbsaja.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MongoDB conectado en : ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
     }
}
module.exports = conectarDB;