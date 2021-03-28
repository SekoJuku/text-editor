import {React, useState,useEffect} from 'react'

export const Test = () => {
    const {update,setUpdate} = useState(false)

    useEffect( () => {
        console.log('Hello ', update)
    },[update])

    return (
        <div>
            <button onClick={event => setUpdate(!update)}>
                Add
            </button>
        </div>
    )
}