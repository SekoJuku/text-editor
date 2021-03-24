import React, {useEffect,useCallback,useState,useContext} from "react"
import {AuthContext} from "../../context/AuthContext"
import {useHttp} from "../../hooks/http.hook"


export const TextListCards = ({texts}) => {
    const {token} = useContext(AuthContext)
    //const [id,setId] = useState(null)
    //const [val,setVal] = useState(null)
    const {request,loading} = useHttp()

    useEffect(() => {
        window.M.updateTextFields()
    },[])

    const deleteHandler = useCallback(async (id) => {
        try {
            await request(`api/text/delete/${id}`,'DELETE',null,{Authorization: `Bearer ${token}`})
        } catch (e) { }
    },[request,token])

    const editHandler = useCallback( async  (id,value) => {
        try {
            await request(`api/text/edit/${id}`,'PUT',{value},{Authorization: `Bearer ${token}`})
        } catch (e) { }
    },[request,token])


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
                    <tr>
                        <td>{i+1}</td>
                        <td><input
                            type="text"
                            value={text._id}
                            hidden
                        />
                            <input
                            type="text"
                            value={text.value}
                        /></td>
                        <td>
                            <button
                                className="btn btn-small green darken-1"
                                style={{marginRight:"1em",marginLeft:"1em"}}
                                onClick={() => editHandler(text._id,text.value)}
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