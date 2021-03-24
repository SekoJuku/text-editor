import {useState,useCallback,useEffect} from 'react'

const storeageName = 'userData'

export const useAuth = () => {
    const [token,setToken] = useState(null)
    const [ready,setReady] = useState(false)
    const [userId,setUserId] = useState(null)

    const login = useCallback((JWTToken, id) => {
        setToken(JWTToken)
        setUserId(id)

        localStorage.setItem(storeageName,JSON.stringify({
            userId:id,token:JWTToken
        }))
    },[])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storeageName)
    },[])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storeageName))

        if(data && data.token) {
            login(data.token,data.userId)
        }
        setReady(true)
    },[login])


    return {login,logout,token,userId,ready}
}