import React, {useState, useEffect} from 'react'
const SampleChild = (motherData: any, sendDataToParent :any) => {


    useEffect(() => {
        sendDataToParent('hello');
    }, [])
    return (
        <div>
        <p>{motherData}</p>

        </div>
    )
}

export default SampleChild