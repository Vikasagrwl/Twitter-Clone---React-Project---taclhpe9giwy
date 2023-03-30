import LeftPane from "../leftPane/LeftPane"
import WhatsHappening from "./rightPane/WhatsHappening"
import './allPages.scss'
import './notification.scss'

const Notification = ()=>{
    return(
        <div className='common'>
            <LeftPane />  
            <div className='main'>Notification</div>
            <WhatsHappening />
        </div>
    )
}

export default Notification;