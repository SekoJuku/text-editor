import React from 'react'
import {Loader} from "./pages/components/Loader"
import {Navbar} from "./pages/components/Navbar"
import {useRoutes} from "./routes"
import {BrowserRouter as Router} from 'react-router-dom'
import {useAuth} from "./hooks/auth.hook"
import {AuthContext} from "./context/AuthContext"
import 'materialize-css'

function App() {
    const {token,login,logout,userId,ready} = useAuth()
    const isAuthenficated = !!token
    const routes = useRoutes(isAuthenficated)

    if(!ready) {
        return <Loader />
    }
    return (
        <AuthContext.Provider value={{token,login,logout,userId,isAuthenficated}}>
            <Router>
                {isAuthenficated && <Navbar/>}
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    )
}

export default App;
