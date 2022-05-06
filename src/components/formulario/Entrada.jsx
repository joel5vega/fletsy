import React from 'react'

function Entrada(props) {
    const {label,type,placeholder}= props
  return (
    <div className='entrada'>
        <label>{label}</label>
        <input type={type} placeholder={placeholder}/>
    </div>
  )
}

export default Entrada