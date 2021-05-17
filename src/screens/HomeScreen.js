import React from 'react';
import Banner from '../Banner';
import './HomeScreen.css';
import Nav from '../Nav';
import request from '../Request';
import Row from '../Row';
import Footer from '../Footer';
function HomeScreen() {
    return (
        <div className="homeScreen">





            <Nav />

            <Banner />

            <Row
                title="NETFLIX ORIGINAL"
                fetchUrl={request.fetchNetflixOriginals}
                isLargeRow={true}
            />

            <Row
                title="Trending Now"
                fetchUrl={request.fetchTrending}

            />

            <Row
                title="Top Rated"
                fetchUrl={request.fetchTopRated}

            />
            <Row
                title="Action Movies"
                fetchUrl={request.fetchActionMovies}

            />
            <Row
                title="Comedy Movies"
                fetchUrl={request.fetchComedyMovies}

            />
            <Row
                title="Horror Movies"
                fetchUrl={request.fetchHornorMovies}

            />
            <Row
                title="Romance Movies"
                fetchUrl={request.fetchRomaceMovies}

            />
            <Row
                title="Documentaries Moive"
                fetchUrl={request.fetchDocumentariesMovies}

            />

            <Footer />

        </div>
    )
}

export default HomeScreen
