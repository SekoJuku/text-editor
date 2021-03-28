import React from "react"
import {TextList} from "./TextList"
import {CreateText} from "./CreateText"

export const MainPage = () => {
    return (
        <div>
            <CreateText />
            <TextList />
        </div>
    )
}