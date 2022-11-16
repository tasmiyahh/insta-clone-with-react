import Profileimg from "../../asset/profile3.jpg"
import Post from "../../asset/post3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faLocationArrow, faFaceSmile, faBookmark } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react"


const Post3 = () => {
    const [comment, setComment] = useState("")
    const [like, setLike] = useState(0)
    const [commentCount, setCommentCount] = useState(0)
    return (
  
      <div className="main">
  
  
  
  
        <div className="header">
          <div className="profile">
            <img src={Profileimg} className="profileimg" width="50" height="50" alt="" />
            <b className="profilename">Maria_imran</b>
          </div>
          <p className="dots"> <b>...</b></p>
        </div>
  
  
        <div>
          <img src={Post} width="500" height="500" alt="" />
  
        </div>
        <div className="icons">
          <p className="icon"><FontAwesomeIcon icon={faHeart} className="icon1" onClick={() => {
            setLike(like + 1)
          }} />
  
            <a href="#showcomment" className="targetcomment"> <FontAwesomeIcon icon={faComment}
              className="icon1" />
            </a>
           
            <FontAwesomeIcon icon={faLocationArrow} className="icon1" />
          </p>
  
          <FontAwesomeIcon className="icon1" icon={faBookmark} />
  
        </div>
        <p className="likes" >
          {(like === 0) ? "" : <p> {like} Likes</p>}
        </p>
        <p className="caption"><b>Maria_imran</b> NOT TO QUIT!</p>
        <p className="comment" id="showcomment">
          {(commentCount === 0) ? "" : <p>view all {commentCount} comments </p>}
        </p>
        <p id="comment3">
  
        </p>
        <hr />
        <div className="footer">
          <p className="addcomment"><FontAwesomeIcon icon={faFaceSmile} className="addcomment" />
            <span >
              <input type="text" id="input" placeholder="Add a comment" className="comment"
                onChange={(e) => (
  
                  setComment(e.target.value)
  
                )}
              />
  
            </span>  </p>
          <p className="addcomment" onClick={() => {
            document.querySelector("#comment3").innerHTML += "<b>User_</b>" + comment + "<FontAwesomeIcon icon={faHeart}/>" + "<br/>"
          }} > <button onClick={() => {
            setCommentCount(commentCount + 1)
          }}>post</button> </p>
  
  
        </div>
  
  
      </div>
  
    )
  }

export default Post3;  