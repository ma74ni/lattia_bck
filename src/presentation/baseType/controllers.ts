import { Request, Response } from "express";
import { BaseTypeRepository, CreateBaseType, CreateBaseTypeDto, CustomError } from "../../domain";

export class BaseTypeController{
    constructor(
        private readonly baseTypeRepository: BaseTypeRepository
    ){}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof CustomError) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.error('Unexpected error:', error);

        return res.status(500).json({error: 'Internal Server Error'})
    }

    createBaseType = (req: Request, res: Response) => {
        const [error, createBaseTypeDto] = CreateBaseTypeDto.create(req.body)
        if(error) return res.status(400).json({error})

        new CreateBaseType(this.baseTypeRepository)
        .execute(createBaseTypeDto!)
        .then(data => res.json(data))
        .catch(error => this.handleError(error, res))
    }

}