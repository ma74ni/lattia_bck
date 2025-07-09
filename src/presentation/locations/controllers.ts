import { Request, Response } from "express";
import { CreateLocationDto, LocationRepository, CreateLocation, CustomError } from "../../domain";
import { LocationModel } from "../../data/mongodb";

export class LocationController{
    constructor(
        private readonly locationRepository: LocationRepository
    ){}
    private handleError = (error: unknown, res: Response) => {
        if(error instanceof CustomError) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.error('Unexpected error:', error);

        return res.status(500).json({error: 'Internal Server Error'})
    }
    createLocation = (req: Request, res: Response) =>{
        const [error, createLocationDto] = CreateLocationDto.create(req.body)
        if(error) return res.status(400).json({error})
        
        new CreateLocation(this.locationRepository)
        .execute(createLocationDto!)
        .then(data => res.json(data))
        .catch(error => this.handleError(error, res))

    }

    listLocation = (req: Request, res: Response) => {
        LocationModel.find()
        .then(locations => {
           res.json({ locations }); 
        })
        .catch(error => {
        console.error('Error listing locations:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
    }
}