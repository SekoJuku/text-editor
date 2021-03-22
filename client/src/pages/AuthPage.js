import React from 'react'

export const AuthPage = () => {
    const [form,setForm] = React.useState({
        email: '', password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]:event.target.value})
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
                                    placeholder=""
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
                                    placeholder=""
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
                            <button className="btn blue ">Login</button>
                        </div>
                        <span>Don't have account? <a href="/register" className="black-text text-lighten-4">Register</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}