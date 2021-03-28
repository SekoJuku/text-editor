import React,{useEffect,useState,useCallback,useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import {useHttp} from "../hooks/http.hook"
import {Loader} from "./components/Loader"
import {TextList} from "./components/TextList"

export const ShowText = () => {
    const {token} = useContext(AuthContext)
    const [data,setData] = useState([])
    const {request,loading} = useHttp()



    if(loading) {
        return <Loader/>
    }

// <p className="center">{(data?data:'No Data')}</p>
    //const [id,setId] = useState(null)

    return (
        <TextList texts={data} />
    )

}