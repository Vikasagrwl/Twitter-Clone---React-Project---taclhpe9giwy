import LeftPane from "../leftPane/LeftPane";
import WhatsHappening from "./rightPane/WhatsHappening";
import './allPages.scss'
import './messages.scss'
const Messages = ()=>{
    return(
        <div className='common'>
            <LeftPane />  
            <div className='main'>Message</div>
            <WhatsHappening />
        </div>
    )
}
export default Messages;