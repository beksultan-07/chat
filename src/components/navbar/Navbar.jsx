import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom'
import './navbar.css'


function Navbar() {
    const [authBtn, setAuthBtn] = useState([])
    const [checkBtn, setCheckBtn] = useState(false)
    
    let history = useHistory();
    const dispatch = useDispatch()

    const state = useSelector(state => state)

    useEffect(() => {
        if (history.location.pathname === '/authentication'){
            setAuthBtn('Register')
        }else{
            if(state.auth) setAuthBtn('Log out')
            else setAuthBtn('Log in')
        }
    }, [state.auth])

    function headerAuth(){
        if (history.location.pathname === '/authentication'){
            dispatch({type: 'headerBtn', value: !state.login})
            setCheckBtn(val => !val)
            
            if (checkBtn) setAuthBtn('Log in')
            else setAuthBtn('Register')
        }else{
            dispatch({type: 'changeAuth', value: false})
            history.push('/authentication')
        }
    }

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__top'>
                    <a onClick={() => history.push('/')} className="header__logo">Logo</a>
                    <div className='header_btns'>
                        <button className='btn header__btn' onClick={() => history.push('/settings')}>Settings</button>
                        <button id='mn' className='btn header__btn' onClick={headerAuth}>{authBtn}</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
