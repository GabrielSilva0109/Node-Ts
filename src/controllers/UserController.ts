import { Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController {
    createUser = (request: Request, response: Response) => {
        const userService = new UserService()
        const user = request.body

        if(!user.name){
            response.status(400).json({message: "Bad request: Name invalid!"})
        }
        
        userService.createUser(user.name, user.email)
        return response.status(201).json({message: 'User created'})
    } 
}

