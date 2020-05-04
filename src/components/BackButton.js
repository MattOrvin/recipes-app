import React from 'react'

function BackButton(props){
    return(
        <div>
            <button onClick={props.goBack}>Back</button>
        </div>
    )
}

export default BackButton