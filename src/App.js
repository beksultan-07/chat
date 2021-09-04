import './App.css';
import {Switch, Route, useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'

import Navbar from './components/navbar/Navbar';
import Auth from './containers/auth/auth';
import Contacts from './containers/contacts/contacts';
import Chat from './containers/chat/chat';
import Settings from './containers/userSettings/settings';


function App() {

    const state = useSelector(state => state)
    let history = useHistory();

    useEffect(() => {
        if (!state.auth) history.push('/authentication')
    }, [])
    
    return (
        <div className="wrap">     
        <Navbar/>

        <div className='container'>
            <Switch>
                <Route exact path='/' component={Contacts}/>
                <Route exact path='/authentication' component={Auth}/>
                <Route exact path='/chat' component={Chat}/>
                <Route exact path='/settings' component={Settings}/>
            </Switch>
        </div>
        </div>
    );
}

export default App;
