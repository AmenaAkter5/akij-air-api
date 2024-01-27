import React from 'react';
import InfoSection from './InfoSection';
import SearchResult from './SearchResult';
import Banner from './Banner';

const Home = () => {
    return (
        <main>
            <Banner />



            {/* Previous */}
            <InfoSection />
            <SearchResult />

            {/* components */}
            {/* Countdown
            FilterOptions
            FlightLists
            SearchFilters
            */}
        </main>
    )
}

export default Home;