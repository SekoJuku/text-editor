import React from "react"
import {Switch,Route,Redirect} from 'react-router-dom'
import {MainPage} from "./pages/MainPage"
import {AuthPage} from "./pages/AuthPage"
import {RegisterPage} from "./pages/RegisterPage"
import {ShowText} from "./pages/ShowText";

export const useRoutes = isAuthenficated => {
    if(isAuthenficated) {
        return (
            <Switch>
                <Route path="/texts" exact>
                    <MainPage/>
                </Route>
                <Route path="/alltexts" exact>
                    <ShowText />
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