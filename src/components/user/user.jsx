import img from '../../img/user.png'
import './user.css'

function User(props) {
    return (
        <li className='user'>
            <div className="shell" onClick={e => props.clickUser(e, props.name, props.email)}></div>
            <div className="img-wrap">
                <img src={img} alt="" />
            </div>
            <div className="user__info">
                <h4 className="user__info__title user-name">{props.name}</h4>
                <h5 className="user__info__title user-phone">{props.phone}</h5>
                <h5 className="user__info__title user-email">{props.email}</h5>
            </div>
        </li>
    )
}

export default User
