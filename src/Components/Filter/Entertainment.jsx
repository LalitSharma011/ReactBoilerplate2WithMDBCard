import React,{useEffect, useState} from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Entertainment.css'
// import { NavItem } from 'react-bootstrap'

export default function Entertainment() {
  const [news, setNews] = useState([])

  useEffect(() => {    

    fetch("https://newsapi.org/v2/top-headlines?category=entertainment&apikey=11d57fbab7c340559e6fb12a9b6e9e94&page=1")
    .then(res=>res.json())
    .then(data=>{
      console.log(data.atticles)
      setNews(data.articles);
    })
    
  }, [])
  

  return (
    <div className="container">
      <div className="row">
        {
          news.map((item) => 
          <div className="col-12 col-md-8 col-lg-4">
            <div className='card user-card ho paper3'>
            <MDBCard>
              <MDBCardImage src={!item.urlToImage ? "https://source.unsplash.com/900x600/?cars,technology" : item.urlToImage} className="card-img-top" alt="..." />
                <MDBCardBody>
                  <MDBCardText>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.author}</p>
                    <a data-testid="cardbodyclass" href={item.url} target="_blank" className="btn user-Button mx-2" rel="noreferrer">Open</a>
                    <MDBBtn type="submit" className="user-Button">Later</MDBBtn>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
