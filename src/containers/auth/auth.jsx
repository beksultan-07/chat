import './auth.css'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

import Reg from '../../components/sign/reg'
import SignIn from '../../components/sign/signIn'

function Auth() {
    const [userName, setUserName] = useState('')
    const [userContact, setUserContact] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const [authBtn, setAuthBtn] = useState('')

    const [changeRegSign, setChangeRegSign] = useState([])

    const [errorMassage, setErrorMassage] = useState()

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    let history = useHistory()

    useEffect(() => {
        if (state.login) {
            setAuthBtn('Log in')
            setChangeRegSign([<SignIn key='1' input__Value={input__Value}/>])
        }
        else {
            setAuthBtn('Register')
            setChangeRegSign([<Reg key='1' input__Value={input__Value}/>])  
        }

    }, [state.login])

    function clickBtn(e){
        e.preventDefault()

        if (e.target.innerText === 'Register'){
            if (userName !== '' && 
            userContact !== '' &&
            email !== '' &&
            password !== '' &&
            password2 !== ''){
                if(password != password2){
                    setErrorMassage([<h3 className='auth__error'>The specified passwords do not match</h3>])
                }else{
                    history.push('/')
                    dispatch({type: 'changeAuth', value: true})
                    dispatch({type: 'userEmail', value: email})
                }
            }else{
                setErrorMassage([<h3 className='auth__error'>You forgot to fill in one field</h3>])
            }
        }else if(e.target.innerText === 'Log in'){
            if(email !== '' && password !== ''){
                history.push('/')
                dispatch({type: 'changeAuth', value: true})
                dispatch({type: 'userEmail', value: email})
            }else{
                setErrorMassage([<h3 className='auth__error'>Incorrect login or password</h3>])
            }
        }

    }

    function input__Value(e){
        if(e.target.name === 'userName') setUserName(e.target.value)
        else if(e.target.name === 'userContact') setUserContact(e.target.value)
        else if(e.target.name === 'email') setEmail(e.target.value)
        else if(e.target.name === 'password') setPassword(e.target.value)
        else setPassword2(e.target.value)
    }

    return (
        <section className='auth'>
            <h3 className="auth__title">{authBtn}</h3>
            {errorMassage}

            <form className='auth__form'>
                {changeRegSign}

                <div className='auth__control__btns'>
                    <button name='sign in' className="auth__btn btn" onClick={(e) => clickBtn(e)}>{authBtn}</button>
                </div>
            </form>
        </section>
    )
}

export default Auth
