import {React,useContext} from "react"
import {useHistory} from 'react-router-dom'
import './Navbar.css'
import {AuthContext} from "../../context/AuthContext"

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper grey darken-1" style={{padding: '0 2em'}}>
                <span className="brand-logo"><img src="https://image.flaticon.com/icons/png/512/7/7487.png" alt="Cloud"/></span>
                <ul id="nav-mobile" className="right">
                    <li><a href="/alltexts">Texts</a></li>
                    <li><a href="/texts">CreateTexts</a></li>
                    <li>
                        <button
                            className="btn red waves-effect waves-light darken-4"
                            onClick={logoutHandler}
                        >
                            LogOut
                        </button>
                    </li>

                </ul>
            </div>

        </nav>
    )
}