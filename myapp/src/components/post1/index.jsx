import Profileimg from "../../asset/profile2.jpg"
import Post2 from "../../asset/post.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faFaceSmile, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import Post from "../../asset/post2.jpg"
import Logo from "../../asset/instalogo.png"
import { faHouse, faMagnifyingGlass, faCompass, faLocationArrow, faSquarePlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import Profile2 from "../../asset/profile2.jpg"
import Profile3 from "../../asset/profile3.jpg"
import { GlobalContext } from "../../context"
import { useContext } from "react"




const Post1 = () => {
  const {state , dispatch} = useContext(GlobalContext)
  const [comment, setComment] = useState("")
  const [like, setLike] = useState(0)
  const [commentCount, setCommentCount] = useState(0)
  const [comment2, setComment2] = useState("")
  const [like2, setLike2] = useState(0)
  const [commentCount2, setCommentCount2] = useState(0)
  const [comment3, setComment3] = useState("")
  const [like3, setLike3] = useState(0)
  const [commentCount3, setCommentCount3] = useState(0)
  return (
    <>
      <div className="mainhead">
        <div className="sidebar">
           <img className="logo" src={Logo} alt="" height="50" width="150" />
          <ul>
            <li><FontAwesomeIcon className="sideicon" icon={faHouse} />Home</li>
            <li><FontAwesomeIcon className="sideicon" icon={faMagnifyingGlass} />Search</li>
            <li><FontAwesomeIcon className="sideicon" icon={faCompass} />Explore</li>
            <li><FontAwesomeIcon className="sideicon" icon={faLocationArrow} />Messages</li>
            <li><FontAwesomeIcon className="sideicon" icon={faHeart} />Notifications</li>
            <li><FontAwesomeIcon className="sideicon" icon={faSquarePlus} />Create</li>
            <li> <img src={Profileimg} className="profileimg" width="20" height="20" alt="" />Profile</li>
          </ul>
        </div>



        <div className="allpost">
          <div className="main">


            <div className="header">
              <div className="profile">
                <img src={Profileimg} className="profileimg" width="50" height="50" alt="" />
                <b className="profilename">Tasmiyah_hussain</b>
              </div>
              <p className="dots"> <b>...</b></p>
            </div>


            <div>
              <img src={Post2} width="450" height="450" alt="" />

            </div>
            <div className="icons">
              <p className="icon"><FontAwesomeIcon icon={faHeart} className="icon1" onClick={() => {
                setLike2(like2 + 1)
              }} />

                <a href="#showcomment2" className="targetcomment"> <FontAwesomeIcon icon={faComment}
                  className="icon1" />
                </a>

                <FontAwesomeIcon icon={faLocationArrow} className="icon1" />
              </p>

              <FontAwesomeIcon className="icon1" icon={faBookmark} />

            </div>
            <p className="likes" >
              {(like2 === 0) ? "" : <p> {like2} Likes</p>}
            </p>
            <p className="caption"><b>Tasmiyah_hussain</b> Indeed</p>
            <p className="comment" id="showcomment2">
              {(commentCount2 === 0) ? "" : <p>view all {commentCount2} comments </p>}
            </p>
            <p id="comment2">

            </p>
            <hr />
            <div className="footer">
              <p className="addcomment"><FontAwesomeIcon icon={faFaceSmile} className="addcomment" />
                <span >
                  <input type="text" id="input" placeholder="Add a comment" className="comment"
                    onChange={(e) => (

                      setComment2(e.target.value)

                    )}
                  />

                </span>  </p>
              <p className="addcomment" onClick={() => {
                  document.querySelector("#comment2").innerHTML += `<b> ${state.user?.firstName }_${state.user?.lastName }</b> ${comment2} <FontAwesomeIcon icon={faHeart}/> <br/>`
              }} > <button onClick={() => {
                setCommentCount2(commentCount2 + 1)
              }}>post</button> </p>


            </div>

          </div>



          {/* 22222 */}





          <div className="main">
            <div className="header">
              <div className="profile">
                <img src={Profileimg} className="profileimg" width="50" height="50" alt="" />
                <b className="profilename">farya_talha</b>
              </div>
              <p className="dots"> <b>...</b></p>
            </div>


            <div>
              <img src={Post} width="450" height="450" alt="" />

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
            <p className="caption"><b>farya_talha</b> this..</p>
            <p className="comment" id="showcomment">
              {(commentCount === 0) ? "" : <p>view all {commentCount} comments </p>}
            </p>
            <p id="comment">

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
               // document.querySelector("#comment").innerHTML += "<b>User_</b>" + comment + "<FontAwesomeIcon icon={faHeart}/>" + "<br/>"
               document.querySelector("#comment").innerHTML += `<b> ${state.user?.firstName }_${state.user?.lastName }</b> ${comment} <FontAwesomeIcon icon={faHeart}/> <br/>`
              
              }} > <button onClick={() => {
                setCommentCount(commentCount + 1)
              }}>post</button> </p>


            </div>

          </div>





          {/* post 3 */}




          <div className="main">

            <div className="header">
              <div className="profile">
                <img src={Profileimg} className="profileimg" width="50" height="50" alt="" />
                <b className="profilename">Maria_imran</b>
              </div>
              <p className="dots"> <b>...</b></p>
            </div>


            <div>
              <img src={Post} width="450" height="450" alt="" />

            </div>
            <div className="icons">
              <p className="icon"><FontAwesomeIcon icon={faHeart} className="icon1" onClick={() => {
                setLike3(like + 1)
              }} />

                <a href="#showcomment3" className="targetcomment"> <FontAwesomeIcon icon={faComment}
                  className="icon1" />
                </a>

                <FontAwesomeIcon icon={faLocationArrow} className="icon1" />
              </p>

              <FontAwesomeIcon className="icon1" icon={faBookmark} />

            </div>
            <p className="likes" >
              {(like3 === 0) ? "" : <p> {like3} Likes</p>}
            </p>
            <p className="caption"><b>Maria_imran</b> NOT TO QUIT!</p>
            <p className="comment" id="showcomment3">
              {(commentCount3 === 0) ? "" : <p>view all {commentCount3} comments </p>}
            </p>
            <p id="comment3">

            </p>
            <hr />
            <div className="footer">
              <p className="addcomment"><FontAwesomeIcon icon={faFaceSmile} className="addcomment" />
                <span >
                  <input type="text" id="input" placeholder="Add a comment" className="comment"
                    onChange={(e) => (

                      setComment3(e.target.value)

                    )}
                  />

                </span>  </p>
              <p className="addcomment" onClick={() => {
                //document.querySelector("#comment3").innerHTML += "<b>User_</b>" + comment3 + "<FontAwesomeIcon icon={faHeart}/>" + "<br/>"
                document.querySelector("#comment3").innerHTML += `<b> ${state.user?.firstName }_${state.user?.lastName }</b> ${comment3} <FontAwesomeIcon icon={faHeart}/> <br/>`
              
              }} > <button onClick={() => {
                setCommentCount3(commentCount3 + 1)
              }}>post</button> </p>


            </div>





          </div>
        </div>

        <div className="sidebar2">

          <ul className="sidebar2ul">
            <li><img src={Profileimg} className="profileimg" width="30" height="30" alt="" /> <b className="profilename">{state.user?.firstName}_{state.user?.lastName}</b>
              <br />
              <span className="suggestions">Suggestions for you</span>
            </li>
            <li><img src={Profile2} className="profile2" width="30" height="30" alt="" /> <b>Aqsa_faisal</b>
              <button>follow</button>
            </li>
            <li><img src={Profile3} className="profile3" width="30" height="30" alt="" /> <b>Laiba_M.Ali</b>
              <button>follow</button>
            </li>


          </ul>
        </div>

      </div>
    </>


  )
}

export default Post1;  