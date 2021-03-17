import React from 'react'

export default function ListItem({object, showDetail}) {

    //methods
    function MovieClicked(){
        showDetail(object);
    }

    // return
    return (
        <div onClick={MovieClicked}>
            {object.name}
            {object.year}
        </div>
    )
}
