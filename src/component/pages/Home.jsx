import WhatsHappening from "./rightPane/WhatsHappening";
import "./Home.scss";
import "./allPages.scss";
import { useEffect, useState } from "react";
import LeftPane from "../leftPane/LeftPane";
import Tweet from "./tweet/Tweet";

import {v4 as uuidv4} from 'uuid';


const Home = () => {
  const user = JSON.parse(localStorage.getItem('userDetails'))
  const [list, setList] = useState([]);
  const [tweet, setTweet] = useState("");
  const id = uuidv4();
  useEffect(()=>{
      const items = JSON.parse(localStorage.getItem('list'));
      if(items){
          setList([...items]);
      }
  },[])

  if (list.length > 0) {
    localStorage.setItem("list", JSON.stringify(list));
  }
  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const handleClick = () => {
    setList([...list,
      {
        id:id,
        message: tweet,
        name: user.displayName,
        like: 0,
        comment: 0,
      },
    ]);
    setTweet("");
  };

  return (
    <div className="common">
      <LeftPane />
      <div className="main">
        <div className="home">
          <h2 style={{ margin: "10px" }}>Home</h2>
          <div>
            <h3>For you</h3>
            <h3>following</h3>
          </div>
        </div>
        <div className="make_tweet">
          <img
            alt="Vikas Aggarwal"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_A1KWEAF8xoaZLlOT1PbmJv2H-46t7witrnmDyA&s"
          />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweet}
            onChange={handleChange}
          />
          <button className="tweet-btn" disabled={!tweet} onClick={handleClick}>
            Tweet
          </button>
        </div>
        <div className="tweets">
          <Tweet />
        </div>
      </div>
      <WhatsHappening />
    </div>
  );
};
export default Home;
