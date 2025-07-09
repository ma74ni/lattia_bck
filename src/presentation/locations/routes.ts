import { Router } from "express";
import { LocationController } from "./controllers";
import { LocationDatasourceImpl, LocationRepositoryImpl } from "../../infraestructure";

export class LocationRoutes {
    static get routes(): Router{
        const router = Router()

        const datasource = new LocationDatasourceImpl()
        const locationRepository = new LocationRepositoryImpl(datasource)
        const controller = new LocationController(locationRepository)

        router.post('/create', (res, req) => {controller.createLocation(res, req)})
        router.get('/', (res, req) => {controller.listLocation(res, req)})

        return router
    }
}