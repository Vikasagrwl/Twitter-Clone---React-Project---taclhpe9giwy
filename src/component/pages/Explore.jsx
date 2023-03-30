import WhatsHappening from './rightPane/WhatsHappening';
import LeftPane from '../leftPane/LeftPane';
import './allPages.scss'
const Explore = ()=>{
    return(
        <div className='common'>
            <LeftPane />  
            <div className='main'>Explore</div>
            <WhatsHappening />
        </div>
    )
}
export default Explore;