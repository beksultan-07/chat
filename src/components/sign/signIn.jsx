import React from 'react'

function SignIn(props) {
    return (
        <>
            <input type="email" name='email' className="auth__inp" placeholder='Your email' onChange={(e) => props.input__Value(e)}/>
           <input type="password" name='password' className="auth__inp" placeholder='Password' onChange={(e) => props.input__Value(e)}/> 
        </>
    )
}

export default SignIn
