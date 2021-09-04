import React from 'react'

function Reg(props) {
    return (
        <>
            <input type="text" name='userName' className="auth__inp" placeholder='Your name and surname' onChange={(e) => props.input__Value(e)}/>
            <input type="number" name='userContact' className="auth__inp" placeholder='Your phone number' onChange={(e) => props.input__Value(e)}/>
            <input type="email" name='email' className="auth__inp" placeholder='Your email' onChange={(e) => props.input__Value(e)}/>
            <input type="password" name='password' className="auth__inp" placeholder='Password' onChange={(e) => props.input__Value(e)}/>
            <input type="password" name='password2' className="auth__inp" placeholder='Password' onChange={(e) => props.input__Value(e)}/>
        </>
    )
}

export default Reg
