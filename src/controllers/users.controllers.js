import { prisma } from "../db.js"

export async function getUsers (req,res){
    const users = await prisma.user.findMany()
    console.log("usuarios",users)
    res.status(200).send("<h1>Example</h1>")
}

export function createSuperAdmin(req,res) {
    prisma.user.create(
        {
            data:{
                email:"Example",
                lastName:"Smith",
                name:"Jhonson",
                password:"12345678",
                username:"jhonson.co"
            }
        }
    ).then(resp =>{
        console.log("st",status)
        res.status(200).send({message:"Data created successfully"})
    })
    .catch(err => {
        console.log("some error",err)
        res.status(400).send({message:"Something was wrong"})
    })
    
}