import React from "react"
import {TextList} from "./components/TextList"
import {CreateText} from "./CreateText"

export const MainPage = () => {
    return (
        <div>
            <CreateText />
            <TextList />
        </div>
    )
}