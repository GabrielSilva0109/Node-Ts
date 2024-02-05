import { Request, Response, response } from "express"
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

    getAllUsers = () => {
        const userService = new UserService()
        const users = userService.getAllUsers()

        return response.status(200).json( users )   
    }
}

