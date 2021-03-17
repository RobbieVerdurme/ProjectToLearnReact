import React, { useState } from 'react'
import ListItem from './ListItem/ListItem'

export default function List({filterdMovies, showDetail}) {
    // return
    return (
        <div>
            {filterdMovies.map(object => (
                <ListItem key={object.id} object={object} showDetail={showDetail}/>
            ))}
        </div>
    )
}
