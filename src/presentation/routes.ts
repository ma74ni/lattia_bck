import { Router } from "express";
import { LocationRoutes } from "./locations/routes";

export class AppRoutes{
    static get routes(): Router{
        const router = Router()

        router.use('/api/location', LocationRoutes.routes)
        
        return router
    }
}