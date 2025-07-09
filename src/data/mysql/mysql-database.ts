import { Sequelize } from "sequelize";


interface Options {
    mysqlUrl: string,
    dbName: string,
    dbUser: string,
    dbPass: string
}

export class MySqlDatabase {
    static sequelize: Sequelize
    static async connect (options: Options){
        const {mysqlUrl, dbName, dbUser, dbPass} = options
        const sequelize = new Sequelize(dbName, dbUser, dbPass, {
            host: mysqlUrl,
            dialect: 'mysql'
        })
        
        try {
          await sequelize.authenticate();
          MySqlDatabase.sequelize = sequelize;
          console.log('Conexión MySql exitosa')
      } catch (error) {
        console.error('Error al conectar a la base Mysql', error)
        throw new Error('No se pudo conectar a la base de datos MongoDB')
      }
    }
}