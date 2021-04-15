import React, {useContext} from 'react'
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/http.hook";
import {Text} from "./Text";

export function HookingText({text}) {
    const {token} = useContext(AuthContext)
    const {request} = useHttp()
    return (
        <Text item = {text} request = {request} token = {token} />
    )
}
