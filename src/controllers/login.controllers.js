import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../../constants.js'
import { prisma } from '../db.js'

export function LogIn(req,res){
    const userCredential = req.body
    const userName = userCredential.username
    const password = userCredential.password

    prisma.user.findFirst(
        {
            select:
            {
                username:userName,
                password:password
            }
        }).then(resp =>{
        
        if(resp){
            const token = jwt.sign(
                { userName },
                SECRET_KEY,
                {expiresIn: '1d'});
            console.log('Token', token, '\n')
            const response = {
                token
            }
    
            res.status(200).send(response);
        }else{
            console.log("resp",resp)
            const response = {
                message:'User not found or password invalid',
                status:404
            }
            res.status(404).send(response);
        }
    }).catch(error => {
       res.status(500).send({message:'some error ocurred', error})
    })
}