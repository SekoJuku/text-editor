import React,{useEffect,useState,useCallback,useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import {useHttp} from "../hooks/http.hook"
import {Loader} from "./components/Loader"
import {TextList} from "./components/TextList"

export const ShowText = () => {
    const {token} = useContext(AuthContext)
    const [data,setData] = useState([])
    const {request,loading} = useHttp()


    const fetchTexts = useCallback( async () => {
        try {
            const fetched = await request('/api/text','GET',null,{
                Authorization: `Bearer ${token}`
            })
            setData(fetched)
        } catch (e) { }
    },[request,token])

    useEffect(() => {
        fetchTexts()
    },[fetchTexts])

    if(loading) {
        return <Loader/>
    }

// <p className="center">{(data?data:'No Data')}</p>
    return (
        <>
          <TextList texts={data} />
        </>
    )

}