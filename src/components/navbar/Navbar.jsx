import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { useHistory,  useLocation} from 'react-router-dom'
import './navbar.css'


function Navbar() {
    const [authBtn, setAuthBtn] = useState([])
    let location = useLocation()
    
    let history = useHistory();
    const dispatch = useDispatch()

    const state = useSelector(state => state)

    useEffect(() => {
        if (location.pathname === '/authentication'){
            if (state.login) setAuthBtn('Register')
            else setAuthBtn('Log in')
        }else{
            setAuthBtn('Log out')
        }
    }, [state.login, location.pathname])

    function headerAuth(){
        if (location.pathname === '/authentication'){
            dispatch({type: 'headerBtn', value: !state.login})
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
