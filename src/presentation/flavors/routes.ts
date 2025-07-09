import { Router } from "express";
import { FlavorDatasourceImpl } from "../../infraestructure";

export class FlavorRoutes {
    static get routes(): Router{
        const router = Router()

        const datasource = new FlavorDatasourceImpl()
        //const flavorRepository = new FlavorRepositoryImpl(datasource)
        //const controller = new FlavorController(flavorRepository)

        //router.post('/create', (res, req) => {controller.createFlavor(res, req)})

        return router
    }
}