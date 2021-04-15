import {React,useCallback,useState,useEffect,useContext} from 'react'
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {HookingText} from "./components/HookingText";
import {Loader} from "./components/Loader";
import {Text} from "./components/Text";
import {Text1} from "./components/Text1"


export const TextList = () => {
    const {token} = useContext(AuthContext)
    //const [id,setId] = useState(null)
    const [texts,setTexts] = useState({})
    const {request,loading} = useHttp()
    const [newText,setNewText] = useState({})
    const [update,setUpdate] = useState(false)


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
                console.log(text)
                return (
                    <Text1 item={text} i={i} />
                )
            })
            }
            </tbody>
        </table>
    )
}
