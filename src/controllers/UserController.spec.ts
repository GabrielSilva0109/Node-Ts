import { UserService } from "../services/UserService"
import { UserController } from "./UserController"

describe('UserController', () =>{
    const mockUserService: Partial<UserService> ={

    }
    const userController = new UserController(mockUserService as UserService)

    it('Deve adicionar um novo usuario', () => {
        console.log(userController)
    })
})