import { NavLink, useNavigate} from "react-router-dom";
import { bookmarkIcon, exploreIcon, homeIcon, messageIcon, moreIcon, notificationIcon, profileIcon, twitterBlueIcon, twitterIcon } from "../icons/Icon";
import { useContext } from "react";
import { myContext } from "../../App";
import "./LeftPane.scss";

const LeftPane = () => {
  const navigate = useNavigate();
  const {logOut} = useContext(myContext);
  const user = JSON.parse(localStorage.getItem('userDetails'))
  const handleClick = ()=>{
    logOut();
    navigate('/')
  }

  return (
    <div className="left-pane">
      <div className="container">
        <header>{twitterIcon}</header>
        <nav>
          <NavLink exact={true} to={"/home"} className={(navData)=>navData.isActive? "selected": null}> <span>{homeIcon}Home</span></NavLink>
          <NavLink to={"/explore"} className={(navData)=>navData.isActive? "selected": null}><span>{exploreIcon}Explore</span></NavLink>
          <NavLink to={"/messages"} className={(navData)=>navData.isActive? "selected": null}><span>{messageIcon}Messages</span></NavLink>
          <NavLink to={"/notification"} className={(navData)=>navData.isActive? "selected": null}><span>{notificationIcon}Notification</span></NavLink>
          <NavLink to={"/bookmark"} className={(navData)=>navData.isActive? "selected": null}><span>{bookmarkIcon}Bookmark</span></NavLink>
          <NavLink to={"/twitterBlue"} className={(navData)=>navData.isActive? "selected": null}><span>{twitterBlueIcon}Twitter Blue</span></NavLink>
          <NavLink to={"/profile"} className={(navData)=>navData.isActive? "selected": null}><span>{profileIcon}Profile</span></NavLink>
          <button className="more"><span>{moreIcon}more</span></button>
        </nav>
        <button className="tweet-btn">Tweet</button>
        <footer>
          <button className="account">
            <div className="photo">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_A1KWEAF8xoaZLlOT1PbmJv2H-46t7witrnmDyA&s"
              />

            </div>
            <div>
                <div className="name">{user.displayName}</div>
                <div className="username">@{user.displayName}</div>
            </div>
          </button>
          <div className="logout" >
                  <button onClick={handleClick}>Logout</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LeftPane;
