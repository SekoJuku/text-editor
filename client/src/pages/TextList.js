import {React,useCallback,useState,useEffect,useContext} from 'react'
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {Loader} from "./components/Loader";


export const TextList = () => {
    const {token} = useContext(AuthContext)
    //const [id,setId] = useState(null)
    const [texts,setTexts] = useState({})
    const [newText,setNewText] = useState({})
    const {} = useState({})
    const [update,setUpdate] = useState(false)
    const {request,loading} = useHttp()

    const fetchTexts = useCallback( async () => {
        try {
            let fetched = await request('/api/text','GET',null,{
                Authorization: `Bearer ${token}`
            })
            console.log(fetched)
            setTexts(fetched)
        } catch (e) { }
    },[request,token])

    useEffect(() => {
        window.M.updateTextFields()
    },[])

    useEffect(() => {
        fetchTexts()
    },[fetchTexts,update])


    const changeHandler = (event) => {
        let value = event.target.value
        setNewText({
            ...newText,
            [event.target.name]: value
        })
        console.log(newText)
    }

    const deleteHandler = useCallback(async (id) => {
        console.log(newText)
        try {
            let data = await request(`api/text/delete/${id}`,'DELETE',null,{Authorization: `Bearer ${token}`})
        } catch (e) { }
        setUpdate(!update)
    },[request,token,update])

    const editHandler = useCallback( async  (id) => {
        try {
            console.log(newText)
            await request(`api/text/edit/${id}`,'PUT',{value: `${newText[id]}`},{Authorization: `Bearer ${token}`})
        } catch (e) { }
        setUpdate(!update)
    },[request,token,update])

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
                        <td>
                            <input
                                type="text"
                                name={text._id}
                                placeholder={text.value}
                                onChange={changeHandler}
                            />
                        </td>
                        <td>
                            <button
                                className="btn btn-small green darken-1"
                                style={{marginRight:"1em",marginLeft:"1em"}}
                                onClick={(event) => editHandler(text._id)}
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