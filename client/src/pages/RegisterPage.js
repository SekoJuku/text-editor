import {React,useState,useEffect} from "react"
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook"

export const RegisterPage = () => {
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

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register','POST', {...form})
        } catch (e) {

        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card grey lighten-4 rounded">
                    <div className="card-content white-text">
                        <form>
                            <span className="card-title black-text">Registration</span>
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
                        </form>
                    </div>
                    <div className="card-action">
                        <div className="row">
                            <button
                                className="btn blue"
                                onClick={registerHandler}
                                disabled={loading}
                            >
                                Sign Up
                            </button>
                        </div>
                        <span>Already have account? <a href="/" className="light-blue-text">Log in</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}