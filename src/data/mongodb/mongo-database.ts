import mongoose from "mongoose"

interface Options {
    mongoUrl: string,
    dbName: string
}

export class MongoDatabase {
    static async connect (options: Options){
        const {mongoUrl, dbName} = options
        try{
            await mongoose.connect(mongoUrl, {dbName: dbName})
            console.log('Conexión exitosa')
        }catch(error){
            console.error('Error al conectar a la base MongoDB', error)
            throw new Error('No se pudo conectar a la base de datos MongoDB')
        }
    }
}