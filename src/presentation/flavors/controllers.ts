import { FlavorModel } from "../../data/mongodb"
import {Request, Response} from "express"

export class FlavorController{
    getFlavors = async(req: Request, res: Response) => {
        try{
            const flavors = await FlavorModel.find().populate('availableAt')
            res.json({data: flavors})
        }catch(error){
            console.error('Error getting flavors:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}