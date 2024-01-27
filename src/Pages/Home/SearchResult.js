import React from 'react';
import { filterData } from '../components/FilterOptions';
import SearchFilters from '../components/SearchFilters';
import FlightLists from '../components/FlightLists';

const SearchResult = () => {
    return (
        <section className='max-w-screen-md lg:max-w-7xl mx-auto lg:px-0 px-4 pb-4'>
            <div className='lg:flex gap-4'>
                <div className='hidden lg:block lg:min-w-[340px] lg:max-w-[340px]'>

                    {filterData.map((options) => (
                        <div key={options._id}>
                            <SearchFilters {...options} />
                        </div>))}

                </div>

                <div className='flex flex-col lg:w-full'>
                    {[...Array(6)].map((_, i) => (
                        <FlightLists />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default SearchResult;