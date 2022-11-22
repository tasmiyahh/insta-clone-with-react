import "./App.css"
import Post1 from "./components/post1"
import Post2 from "./components/post2";
import Post3 from "./components/post3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faCompass, faLocationArrow, faSquarePlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import Profileimg from "./asset/profileimg.jpg"
import Profile2 from "./asset/profile2.jpg"
import Profile3 from "./asset/profile3.jpg"


const App = () => {
    return (
        <>
            <div className="mainhead">
                <div className="sidebar">
                    <h2 className="title">Instagram</h2>
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
                    <Post1 />
                    <Post2 />
                    <Post3 />

                </div>

                <div className="sidebar2">

                    <ul className="sidebar2ul">
                        <li><img src={Profileimg} className="profileimg" width="30" height="30" alt="" /> <b className="profilename">Tasmiyah_hussain</b>
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

export default App;