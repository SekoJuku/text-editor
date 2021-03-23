import {createContext} from 'react'

function none() {}

export const AuthContext = createContext( {
    token:null,
    userId:null,
    login:none,
    logout:none,
    isAuthenficated:false
})