import React,{useEffect,useState,useCallback,useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import {useHttp} from "../hooks/http.hook"
import {Loader} from "./components/Loader"
import {TextListCards} from "./components/TextListCards"

export const ShowText = () => {
    const {request,loading} = useHttp()
    const {texts,setTexts} = useState(null)
    const {wait,setWait} = useState(true)
    const {token} = useContext(AuthContext)

    const getAllTexts = useCallback( async () => {
        try {
            const fetched = await request('/api/text/','GET',null,{Authorization: 'Bearer '+ token})
            setTexts(fetched)
            setWait(false)
        } catch (e) { }
    },[token,request,setTexts])

    useEffect(() => {
        getAllTexts()
    },[getAllTexts])

    if(loading) {
        return <Loader />
    }
//  {!loading && <TextListCards texts={texts} />}
    if(wait === false) {
        console.log(texts)
    }
    return (
        <>

        </>
    )
}