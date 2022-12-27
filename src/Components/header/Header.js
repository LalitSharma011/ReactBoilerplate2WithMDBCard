import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Header.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';




export default function Header() {


  const [search, setsearch] = useState("");
  // const history = useHistory();
  const navigate2 = useNavigate();
  
  // search option so user can directly search the desired movie
  const searchNews = () => {
    navigate2(`/${search}`)
  }



  const username = JSON.parse(localStorage.getItem('userName'));
  // console.log(username)

  const navigate = useNavigate();

  function logout() {
    // localStorage.removeItem('jwt_token');
    // localStorage.clear();    // it will clear all tokens
    localStorage.removeItem('jwt_token');
    navigate("/registraion")
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top user-header">
        <div className="container-fluid">


          <Link className="navbar-brand" to="/registration">NDTV News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {
              localStorage.getItem('jwt_token') ?
                <>


                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      {/* <Link className="nav-link active" aria-current="page" to="/registraion">Home</Link> */}
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                      {/* <Link className="nav-link active" to="/card">Card</Link> */}
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/readnow">Read Now</Link>
                    </li>


                    <li className="nav-item">
                      <Link className="nav-link active" to="/business">Business</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" to="/sports">Sports</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                      <form className="d-flex">
                        <input className="px-2 search col-12" type="search" onChange={(e) => { setsearch(e.target.value) }} placeholder="Search for News" aria-label="Search" />
                        <button className="btn0" type="submit" onClick={searchNews}>Search</button>
                      </form>
                    </li>


                  </ul>
                </>

                :
                <>
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/registraion">Register</Link>
                    </li>

                    {/* localStorage.getItem() */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                  </ul>
                </>
            }
            {/* <li className="nav-item user-logout-button">
                <Link className="nav-link" onClick={logout}>Logout</Link>
              </li> */}





          </div>
        </div>

        {localStorage.getItem('jwt_token') ?
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Welcome: {username.firstname} {username.lastname}
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/" onClick={logout}>Logout</a></li>
              {/* <li><a class="dropdown-item" href="/">Profile</a></li> */}

            </ul>
          </div>
          : null
        }
      </nav>
    </div>
  )
}
