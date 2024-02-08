import express, { Request, Response } from 'express'
import { router } from './routes'
import 'reflect-metadata'
import { AppDataSource } from "./database"

const server = express()

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been Initialized!")
    }).catch((err) =>{
        console.error("Error during Data Source Initilization", err)
    })

server.use(express.json())
server.use(router)

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({messge: 'DioBank API'})
})

server.listen(5000, () => console.log('Server on!'))