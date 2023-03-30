import LeftPane from "../leftPane/LeftPane";
import WhatsHappening from "./rightPane/WhatsHappening";

const TwitterBlue = ()=>{
    return(
        <div className='common'>
            <LeftPane />  
            <div className='main'>TwitterBlue</div>
            <WhatsHappening />
        </div>
    )
}
export default TwitterBlue;