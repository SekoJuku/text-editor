import {React,useState,useCallback} from "react"
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook"


export const CreateText = () => {
    const message = useMessage()
    const {loading,error,request,clearError} = useHttp()
    const [createform,setCreateForm] = useState({
        value:''
    })

    const createHandler = async () => {
        try {

        } catch (e) { }
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="value">Text</label>
                    <input name="value" minLength="1"/>
                </div>
                <button
                    className="btn green white-text"
                    onClick={createHandler}
                    disabled={loading}
                >
                    Create
                </button>
            </form>
        </div>
    )
}