import React,{useEffect, useState} from 'react'
import './ReadNow.css'
import { useNavigate } from "react-router-dom";
// import { NavItem } from 'react-bootstrap'

export default function ReadNow() {
  const navigate = useNavigate();  //variable to protect the page
  const [news, setNews] = useState([])

  useEffect(() => {    

    fetch("http://localhost:3001/newsdata")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setNews(data);
    })
    
  }, [])
  

  useEffect(() => {                                         //coding start to protect the page
    fetch("http://localhost:9000/auth/isAuthenticated", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // if(data.status===401){
            //     navigate("/login")
            // }

            if (!data.isAuthenticated) {
                navigate("/login")
            }
        })
}, [])


  return (
    <div className="container user-Readnow mx-auto">
    <div className="row">
        {
            news.map(item=><div className="card" style={{width: "18rem"}}>
            {/* <img src={item.urlToImage} className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">{item.id} {item.description} {item.url}</h5>
              <a href={item.url} className="btn btn-primary">Read full Description</a>
            </div>
          </div>)
        }
    </div>
   </div>
  )
}
