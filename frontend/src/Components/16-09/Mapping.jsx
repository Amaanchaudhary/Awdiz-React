import React from 'react'

const Mapping = (props) => {
    // console.log(props)
    const {names , kuchbhi} = props; //Retrived the value of name and kuchbhi from App page
    // console.log(names , kuchbhi) 
    return (
        <div>
            <h1>MAPPING</h1>
            {names.map((nameVal , i) => (
                <div key={i}>
                    <h1>Student name - {nameVal}</h1>
                    <h2>Student ID - {i}</h2>
                    <h2>Student Message - {kuchbhi}</h2>
                </div>
            ))}
        </div>
    )
}

export default Mapping;