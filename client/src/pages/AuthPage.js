import {React,useState,useEffect} from 'react'
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook";

export const AuthPage = () => {
    const message = useMessage()
    const {loading,error,request,clearError} = useHttp()
    const [form,setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    },[error,message])

    const changeHandler = event => {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST',{...form})
            console.log('Data', data)
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