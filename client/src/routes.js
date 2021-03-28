import React from "react"
import {Switch,Route,Redirect} from 'react-router-dom'
import {TextList} from "./pages/TextList"
import {MainPage} from "./pages/MainPage"
import {AuthPage} from "./pages/AuthPage"
import {RegisterPage} from "./pages/RegisterPage"
import {Test} from "./pages/Test"

export const useRoutes = isAuthenficated => {
    if(isAuthenficated) {
        return (
            <Switch>
                <Route path="/texts" exact>
                    <MainPage/>
                </Route>
                <Route path="/alltexts" exact>
                    <TextList />
                </Route>
                <Route path="/test" exact>
                    <Test />
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