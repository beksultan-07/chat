import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import User from '../../components/user/user'

function Contacts() {
    const [allUsers, setAllUsers] = useState([])

    const state = useSelector(state => state)

    const history = useHistory()

    useEffect(() => {
        state.users.forEach(element => {
            if (element.email != state.userEmail) {
                setAllUsers(el => [...el, element])
            }
        });
    }, [])

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
