import React from 'react'

export default function Detail({object}) {
    return (
        <div>
            <h1>{object?.name}</h1>
            <table>
                {Object.entries(object).map(el=> (
                    <tr key={el[0]}>
                    <td><b>{el[0]}</b></td>
                    <td>{el[1]}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
