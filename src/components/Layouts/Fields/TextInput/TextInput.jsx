import React from 'react';
import './TextInput.css'

const TextInput = ({label, value, setter, isPassword = false}) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        type={ isPassword ? 'password' : 'text'}
        placeholder=""
        value={value}
        onChange={event => setter(event.target.value)}
      />
    </div>
  )
}

export default TextInput;