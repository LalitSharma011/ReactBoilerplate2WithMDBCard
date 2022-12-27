import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../card/Card';
import Header from '../header/Header'
import { useParams } from 'react-router-dom';
import CustomPagination from '../pagination/Pagination';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
export default function Search() {
    const key = "11d57fbab7c340559e6fb12a9b6e9e94";
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const { search } = useParams();
    const [card, setcard] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState("");

    useEffect(() => {
        window.scroll(0, 0);
        fetchNews();
    }, [page]);

    // fetching the searched movie from the api
    const fetchNews = async () => {
        // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}&page=${page}`)
        fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${key}&language=en&page=${page}`)
            .then(response => response.json())
            .then(data => {
                setcard(data.results);
                setTotalPage(data.total_pages)
            })
            .catch(err => console.error(err))
    };

    return (

        <div>
            <Header />
            {/* if the searched movie is not a correct movie then a modal will be displayed "no data found" and if the movie is valid then then passing it to the card component */}
            <div className="container" style={{ paddingBottom: "4em" }}>
                <div className="row">
                    {
                        totalpage === 0 ?
                            <Modal.Dialog >
                                <Modal.Header>
                                    <Modal.Title>{search}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Alert variant="danger" id="noData" className="m-4">No Data Found</Alert>
                                </Modal.Body>
                            </Modal.Dialog>
                            :
                            // card.map(item => <Card id={item.id} title={item.original_title} image={IMG_URL + item.poster_path} release_date={item.release_date} overview={item.overview} rating={item.vote_average} voting={item.vote_count} />)
                            card.map((item) =><div className="col-12 col-md-8 col-lg-4"><Card urlToImage={item.urlToImage} title={item.title} author={item.author} description={item.description} url={item.url}/></div>)
                    }
                </div>
                <CustomPagination setPage={setPage} totalpage={totalpage} />
            </div>
        </div>
    )
}