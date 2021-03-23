import {React, useState, useCallback, useEffect, useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook"


export const CreateText = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading,error,request,clearError} = useHttp()
    const [value,setValue] = useState('')

    const createHandler = async () => {
        try {
            const data = await request('/api/text/create','POST',{value},{Authorization: 'Bearer '+ auth.token})
            console.log(data)
        } catch (e) { }
    }

    useEffect(() => {
        window.M.updateTextFields()
    },[])

    return (
        <div className="row s8">
            <div className="form-group">
                <label htmlFor="value">Text</label>
                <input
                    id="value"
                    type="text"
                    name="value"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
            <button
                className="btn green white-text"
                onClick={createHandler}
                disabled={loading}
            >
                Create
            </button>
        </div>
    )
}