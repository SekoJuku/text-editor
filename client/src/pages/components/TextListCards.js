import React from "react"

export const TextListCards = ({texts}) => {
    if(!texts.length) {
        return <h5 className="center">No Texts. Create one!</h5>
    }

    return(
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Text</th>
            </tr>
            </thead>

            <tbody>
            {texts.map((text,i) => {
                return (
                    <tr>
                        <td>{i+1}</td>
                        <td>{text.value}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}