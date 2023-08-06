import { requestAPI } from "../functions/General.function"
import {dataUsers} from '../data/user'
import jwt_decode from "jwt-decode";

export const authAPI = async ()=>{
    return new Promise(async (resolve,reject) =>{
        if(process.env.NODE){
            try{
                let resAuth = await requestAPI('get', '/api/auth',)
                resolve( resAuth.data)
            }catch(ex){
                reject(ex)
            }
        }else{
            try{
                if(localStorage.arentData){
                    resolve( localStorage.arentData)
                }else{
                    throw new Error('Cannot find token')
                }  
            }catch(ex){
                reject(ex)
            }
         
        }
    
    })
}

export const loginAPI = async (data)=>{
    return new Promise(async (resolve,reject) =>{
        if(process.env.NODE){
            try{
                let resAuth = await requestAPI('post', '/api/auth/login', data, null)
                resolve( resAuth.data)
            }catch(ex){
                reject(ex)
            }
        }else{  
            try{
                const { email, password } = data
                let index = dataUsers.findIndex(x => { return x?.name === email })
                if (index < 0) {
                    throw new Error('Cannot find this user')
                }
                if (dataUsers[index].password !== password) {
                    throw new Error('The password is not correct')
                }
                resolve(email)
            }catch(ex){
                reject(ex)
            }

           
        }
    
    })
}