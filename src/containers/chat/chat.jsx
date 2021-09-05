import './chat.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom'
import axios from '../../components/axiosFB/axiosFB'


// {id: 3, sms: 'im good', from: 'butsing@gmail.com', to: 'asad@gmail.com'}

function Chat() {
    const [messageInp, setMessageInp] = useState('')
    const [allMessagesHTML, setAllMessagesHTLM] = useState([])

    const state = useSelector(state => state)
    const location = useLocation();

    useEffect(() => {
        setAllMessagesHTLM([])
        watchUserSms()

    }, [])

    function watchUserSms() {
        axios.get('/messages.json')
            .then(res => {
                setAllMessagesHTLM([])
                for(let i in res.data){
                    let el = res.data[i][0]
                    if (el.from === state.userEmail && el.to === location.state.params || 
                        el.from === location.state.params && el.to === state.userEmail ) {
                            if (el.from === state.userEmail) {
                                setAllMessagesHTLM(sms => [...sms, <p key={el.id} className='massage mySms'>{el.sms}</p>])
                            }else{
                                setAllMessagesHTLM(sms => [...sms, <p key={el.id} className='massage'>{el.sms}</p>])
                            }
                    }
                }
            })
            .finally(() => {
                watchUserSms()
            })
    }

    function sendMessage(e) {
        e.preventDefault()
    
        let messages = []
        messages.push({id: messages.length, sms: messageInp, from: state.userEmail, to: location.state.params})

        axios.post('/messages.json', messages)
            .finally(() => {
                // setAllMessages(sms => [...sms, <p className='massage mySms'>{messageInp}</p>])
                setMessageInp('')
            })
    }

    return (
        <section className='chat'>
            <h4 className="talking-user">{location.state.params}</h4>
            <div className="chat__massages">
                {allMessagesHTML}
            </div>

            <form onSubmit={e => sendMessage(e)} className='chat__form'>
                <input value={messageInp} type="text" placeholder='message' className='chat__input' onChange={e => setMessageInp(e.target.value)}/>
                <button className="send__btn btn">send</button>
            </form>
        </section>
    )
}

export default Chat
