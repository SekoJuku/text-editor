import React,{useState,useContext,useEffect} from "react"
import {AuthContext} from "../../context/AuthContext"
import {useHttp} from "../../hooks/http.hook"

export const Text1 = (props) => {
    const {token} = useContext(AuthContext)
    const {request} = useHttp()
    const text = props['item']
    const id = text['_id']
    const i = props['i']
    console.log(text['value'])

    const {val,setValue} = useState(text['value'])

    const changeHandler = (e) => {
        const target = e.target
        const v = target.value

        setValue(v)
    }

    const editHandler = async () => {
        try {
            const data = await request(`api/text/edit/${id}`, 'PUT', {value: `${val}`}, {Authorization: `Bearer ${token}`})
            console.log('Editing!')
        } catch (e) {
            console.log(e.message)
        }
    }

    const deleteHandler = async () => {
        try {
            const data = await request(`api/text/delete/${id}`, 'DELETE', null, {Authorization: `Bearer ${token}`})
            console.log('Deleting!')
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <tr>
            <td>{i + 1}</td>
            <td>
                <input
                    type="text"
                    name="value"
                    value={val}
                    onChange={changeHandler}
                />
            </td>
            <td>
                <button
                    className="btn btn-small green darken-1"
                    style={{marginRight:"1em",marginLeft:"1em"}}
                    onClick={editHandler}
                >Edit</button>
                <button
                    className="btn btn-small red darken-2"
                    onClick={deleteHandler}
                >Delete</button>
            </td>
        </tr>
    )

}
