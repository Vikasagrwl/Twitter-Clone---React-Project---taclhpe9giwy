import LeftPane from "../leftPane/LeftPane"
import WhatsHappening from "./rightPane/WhatsHappening"
import './allPages.scss'
const Profile = ()=>{
    return(
        <div className='common'>
            <LeftPane />  
            <div className='main'>Profile</div>
            <WhatsHappening />
        </div>
    )
}
export default Profile;