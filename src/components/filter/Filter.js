import React, { useEffect, useRef, useState }  from 'react'
import './Filter.css';


export default function Filter({func_filter, objectArray}) {
    //props
    const textInput = useRef(null);
    const [filterArray, SetFilterArray] = useState("");
    const [filterText, SetFilterText] = useState("");

    // methods
    useEffect(() => {
        func_filter({searchInput: filterText, arrayInput: filterArray})
    }, [filterArray, filterText])

    // return
    return (
        <>
        {objectArray.map(lang => (
            <button key={lang} className={lang == filterArray? "active" : ""} onClick={(e) =>SetFilterArray(e.target.innerText === filterArray? "": e.target.innerText)}>{lang}</button>
        ))}

        <input ref={textInput} type="text" placeholder="Search for movie" onKeyPress={() => SetFilterText(textInput.current.value)}/>
        </>
    )
}
