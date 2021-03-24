import React, {useEffect,useCallback,useState,useContext} from "react"
import {AuthContext} from "../../context/AuthContext"
import {useHttp} from "../../hooks/http.hook"
import {Loader} from "./Loader"


export const TextList = ({texts}) => {
    const {token} = useContext(AuthContext)
    //const [id,setId] = useState(null)
    const [val,setVal] = useState({})
    const {request,loading} = useHttp()

    useEffect(() => {
        window.M.updateTextFields()
    },[])

    useEffect(() => {
        let newVal = {}
        texts.map((text) => {
            newVal[text._id] = text.value
        })
        setVal(newVal)
    },[texts])

    const deleteHandler = useCallback(async (id) => {
        try {
            await request(`api/text/delete/${id}`,'DELETE',null,{Authorization: `Bearer ${token}`})
        } catch (e) { }
    },[request,token])

    const editHandler = useCallback( async  (id) => {
        try {
            await request(`api/text/edit/${id}`,'PUT',{value: val[id]},{Authorization: `Bearer ${token}`})
        } catch (e) { }
    },[request,token])

    const changeHandler = event => {

        //setVal({...val,[event.target.name]:event.target.value})
    }

    if(loading) {
        return <Loader />
    }

    if(!texts.length) {
        return <h5 className="center">No Texts. Create one!</h5>
    }

    return(
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Text</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {texts.map((text,i) => {
                return (
                    <tr key={text._id}>
                        <td>{i+1}</td>
                        <td><input
                            type="text"
                            value={text._id}
                            hidden
                        />
                            <input
                            type="text"
                            name="value"
                            value={val[text._id]}
                            onChange={event => {
                                let id = text._id.toString()
                                setVal(val[id] = event.target.value)
                            }}
                        /></td>
                        <td>
                            <button
                                className="btn btn-small green darken-1"
                                style={{marginRight:"1em",marginLeft:"1em"}}
                                onClick={() => editHandler(text._id)}
                            >Edit</button>
                            <button
                                className="btn btn-small red darken-2"
                                onClick={() => deleteHandler(text._id)}
                            >Delete</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}