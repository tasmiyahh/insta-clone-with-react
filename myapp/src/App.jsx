import "./App.css"
import Post1 from "./components/post1"
import Post2 from "./components/post2";
import Post3 from "./components/post3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faCompass, faLocationArrow, faSquarePlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import Profileimg from "./asset/profileimg.jpg"
import Profile2 from "./asset/profile2.jpg"
import Profile3 from "./asset/profile3.jpg"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import axios from "axios";
import { GlobalContext } from "./context";
import { useContext } from "react";
import { useEffect } from "react";



const App = () => {
  const { state, dispatch } = useContext(GlobalContext)
  useEffect(() => {
    axios({

      method: "get",
      url: 'http://locahost:5000/profile',
      withCredentials: true

    }).then(response => {
      if (response.status === 200) {
        console.log("response: ", response.data);
        dispatch({  //ye relaod ya refresh pe pe data show profile ka isliye use is me nav bar kch nh aya coz hum ne route pe null likhha h 
          type: "USER_LOGIN",
          payload: response.data
        })
      } else {
        dispatch({
          type: "USER_LOGOUT"
        })
      }

    }).catch(error => {
      console.log("Error in api call: ", error);
      dispatch({
        type: "USER_LOGOUT"
      })
    })
  }, [])

  const logoutHandler = () => {
    axios.post('http://localhost:5000/logout', {}, {
      withCredentials: true
    })
      .then(function (response) {
        console.log(response.data);
        dispatch({ type: "USER_LOGOUT" })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>

      <div className="navbar">


        <Router>

          <nav>
            {(state.isLogin === true) ? <>
              <ul>
                <li>
                  <Link to="/post1">Home</Link>

                </li>
                <li>
                  <Link onClick={logoutHandler}>Logout</Link>

                </li>

              </ul>



            </> : null}


            {(state.isLogin === false) ? <>

              <ul>
                <li>

                  <Link to="/login">Login</Link>


                </li>
                <li>
                  <Link to="/signup">Signup</Link>

                </li>
              </ul>
            </> : null}


          </nav>


          <Routes>

            {(state.isLogin === false) ? <>

              <Route path="/login" element={<Login />} />


              <Route path="/signup" element={<Signup />} />

            </> : null}


            {(state.isLogin === true) ? <>
              <Route path="/post1" element={<Post1 />} />


             
            </> : null}



           
          </Routes>

        </Router>



      </div>
    </>
  )
}

export default App;