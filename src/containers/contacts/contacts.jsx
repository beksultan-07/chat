import axios from '../../components/axiosFB/axiosFB'
import {useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

import User from '../../components/user/user'
import Loader from '../../components/loader/loader'

function Contacts() {
    const [allUsers, setAllUsers] = useState([])
    const [loader, setLoader] = useState([])

    const state = useSelector(state => state)

    const history = useHistory()

    useEffect(() => {
        setLoader([<Loader/>])
        if (!state.auth) {
            history.push('/authentication')
        }else{
            watchUsersFB()
        }
    }, [])

    function watchUsersFB() {

        axios.get('/users.json')
            .then(res => {
                setLoader([])

                let user = []
                for(let i in res.data){
                    if (res.data[i].email != state.userEmail) {
                        user.push(res.data[i])
                    }
                }
                setAllUsers(user)
                watchUsersFB()
            })
        }
    function userClick(e){
        try {
            let username = e.target.children[1].children[2].innerText
            history.push('/chat', {params: username})
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='contacts'>
            {loader}
            <ul className='users'>
                {allUsers.map((el, index)=> {
                    return <User 
                        key={index}
                        name={el.name}
                        phone={el.phone}
                        email={el.email}
                        clickUser = {userClick}
                    />
                })}
            </ul>
        </section>
    )
}

export default Contacts
