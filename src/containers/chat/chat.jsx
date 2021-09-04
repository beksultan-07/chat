import './chat.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom'

function Chat() {
    const [messageInp, setMessageInp] = useState('')
    const [allMessages, setAllMessages] = useState([])

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const location = useLocation();

    useEffect(() => {
        console.log(location.state.params);
        setAllMessages([])
        state.messages.forEach((el) => {
            if (el.from === state.userEmail && el.to === location.state.params || 
                el.from === location.state.params && el.to === state.userEmail ) {
                    if (el.from === state.userEmail) {
                        setAllMessages(sms => [...sms, <p className='massage mySms'>{el.sms}</p>])
                    }else{
                        setAllMessages(sms => [...sms, <p className='massage'>{el.sms}</p>])
                    }
                    
            }
        });
    }, [state.messages])

    function sendMessage(e) {
        e.preventDefault()
    
        let messages = [...state.messages]
        messages.push({id: messages.length, sms: messageInp, from: state.userEmail, to: location.state.params})
        dispatch({type: 'messageSend', value: messages})

        setAllMessages(sms => [...sms, <p className='massage mySms'>{messageInp}</p>])
        setMessageInp('')
    }

    return (
        <section className='chat'>
            <div className="chat__massages">
                {allMessages}
            </div>

            <form onSubmit={e => sendMessage(e)} className='chat__form'>
                <input value={messageInp} type="text" placeholder='message' className='chat__input' onChange={e => setMessageInp(e.target.value)}/>
                <button className="send__btn btn">send</button>
            </form>
        </section>
    )
}

export default Chat
