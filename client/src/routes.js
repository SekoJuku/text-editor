import React from "react"
import {Switch,Route,Redirect} from 'react-router-dom'
import {CreateText} from "./pages/CreateText"
import {ShowText} from "./pages/ShowText"
import {AuthPage} from "./pages/AuthPage"
import {RegisterPage} from "./pages/RegisterPage"

export const useRoutes = isAuthenficated => {
    if(isAuthenficated) {
        return (
            <Switch>
                <Route path="/texts" exact>
                    <ShowText/>
                </Route>
                <Route path="/texts/create" exact>
                    <CreateText/>
                </Route>
                <Redirect to="/texts"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Route path="/register">
                <RegisterPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}