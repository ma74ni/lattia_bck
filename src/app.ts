import { Sequelize } from "sequelize";
import { envs } from "./config";
import { MongoDatabase, MySqlDatabase } from "./data";
import { initMySQLModels } from "./data/mysql/init";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(() => {
    main();
})()

async function main(){
   /*  await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL
    }) */
    await MySqlDatabase.connect({
        mysqlUrl: envs.MYSQL_URL,
        dbName: envs.MYSQL_DB_NAME,
        dbUser: envs.MYSQL_DB_USER,
        dbPass: envs.MYSQL_DB_PASSWORD || '',
    })

    initMySQLModels();
    
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start()
}