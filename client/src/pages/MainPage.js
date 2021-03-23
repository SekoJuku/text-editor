import React, {useState} from "react"
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {Navbar} from "./components/Navbar"
import {CreateText} from "./CreateText"
import {ShowText} from "./ShowText"

export const MainPage = () => {
    const message = useMessage()
    const {loading,error,request,clearError} = useHttp()
    const [createform,setCreateForm] = useState({
        value:''
    })

    const createHandler = async () => {

    }

    return (
        <div>
            <CreateText/>
            <ShowText/>
        </div>
    )
}