import WhatsHappening from './rightPane/WhatsHappening'
import LeftPane from '../leftPane/LeftPane'
import './allPages.scss'
import './bookmark.scss'
const Bookmark = ()=>{
    return(
        <div className='common'>
            <LeftPane />  
            <div className='main'>Bookmark</div>
            <WhatsHappening />
        </div>
    )
}
export default Bookmark;