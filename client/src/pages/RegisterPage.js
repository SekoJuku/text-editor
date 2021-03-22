import React from "react"

export const RegisterPage = () => {
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
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <div className="row">
                            <button className="btn blue ">Sign Up</button>
                        </div>
                        <span>Already have account? <a href="/" className="black-text text-lighten-4">Log in</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}