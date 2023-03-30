import { useEffect, useState } from "react";
import { commentIcon, likeIcon } from "../../icons/Icon";
import "./tweet.scss";


const Tweet = () => {
    const[state, setState] = useState(false);
    let list = JSON.parse(localStorage.getItem("list"));

    const hitLike = (item)=>{
        const index = list.findIndex((i)=>i.id===item.id);
        const updatedItem = {
            ...list[index],
            like:list[index].like+1,
        }
        list[index] = updatedItem;
        localStorage.setItem('list', JSON.stringify(list));
        setState(!state);
    }

  return (
    <div>
      {list &&
        list.map((item, index) => {
          return (
            <div className="tweet" key={index}>
              <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_A1KWEAF8xoaZLlOT1PbmJv2H-46t7witrnmDyA&s" alt="photo" />
                <div className="content">
                    <div className="user_name">{item.name}</div>
                    <div className="message">{item.message}</div>
                </div>
              </div>
              <div className="likes">
                <div className="like" onClick={()=>hitLike(item)}>{likeIcon}{item.like}</div>
                <div className="comment">{commentIcon}{item.comment}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Tweet;
