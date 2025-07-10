import { Router } from "express";
import { BaseTypeDatasourceImpl, BaseTypeRepositoryImpl } from "../../infraestructure";
import { BaseTypeController } from "./controllers";


export class BaseTypeRoutes {
    static get routes(): Router{
        const router = Router()
        
        const datasource = new BaseTypeDatasourceImpl()
        const baseTypeRepository = new BaseTypeRepositoryImpl(datasource)
        const controller = new BaseTypeController(baseTypeRepository)

        router.post('/create', (req, res)=>{controller.createBaseType(req, res)})
        router.get('/', (req, res)=>{controller.listBaseType(req, res)})

        return router
    }
}