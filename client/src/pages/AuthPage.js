import {React,useState,useEffect,useContext} from 'react'
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook"
import {AuthContext} from "../context/AuthContext"

export const AuthPage = () => {
    const auth  = useContext(AuthContext)
    const message = useMessage()
    const {loading,error,request,clearError} = useHttp()
    const [form,setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    },[error,message,clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST',{...form})
            auth.login(data.token,data.userId)
        } catch (e) { }
    }



    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card grey lighten-4 rounded">
                    <div className="card-content white-text">
                        <span className="card-title black-text">Authorization</span>
                        <div>
                            <div className="input-field black-text">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="black-text"
                                    onChange={changeHandler}
                                />
                                    <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field black-text">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="black-text"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <div className="row">
                            <button
                                className="btn blue"
                                onClick={loginHandler}
                                disabled={loading}
                            >
                                Login
                            </button>
                        </div>
                        <span>Don't have account? <a href="/register" className="light-blue-text ">Register</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}