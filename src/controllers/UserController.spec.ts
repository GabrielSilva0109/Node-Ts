import { Request, Response } from "express"
import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { makeMokeResponse } from "../__mocks__/mockResponse.mock"


describe('UserController', () =>{
    const mockUserService: Partial<UserService> ={
        createUser: jest.fn()
    }
    const userController = new UserController(mockUserService as UserService)
   

    it('Deve adicionar um novo usuario', () => {
        const mockRequest = {
            body: {
                name: 'Gabriel',
                email: 'gabriel@teste.com'
            }
        } as Request

        const mockResponde = makeMokeResponse()
        userController.createUser(mockRequest, mockResponde)
        expect(mockResponde.state.status).toBe(201)
        expect(mockResponde.state.json).toMatchObject({message: 'User created'})
    })
})