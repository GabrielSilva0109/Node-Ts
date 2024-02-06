import { Request, Response, response } from "express"
import { UserService } from "../services/UserService"

export class UserController {
    userService: UserService
    
    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body

        if(!user.name){
            response.status(400).json({message: "Bad request: Name invalid!"})
        }

        this.userService.createUser(user.name, user.email)
        return response.status(201).json({message: 'User created'})
    }

    getAllUsers = () => {
        const users = this.userService.getAllUsers()

        return response.status(200).json( users )   
    }
}

