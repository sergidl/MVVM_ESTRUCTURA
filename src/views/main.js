import React, { useState } from "react";
import { searchMovies, getMovieDetails } from "../services/movieService";
import SearchViewModel from "../viewmodels/searchViewModel";
import { setMovie } from "../viewmodels/movieDetailsViewModel";
import SearchView from "../views/search";
import MovieDetailsView from "../views/movieDetails";

const Main = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (query) => {
        setIsLoading(true);
        setSearchResults([])
        try {
            const results = await searchMovies(query);
            setSearchResults(results);
            setError(null);
        } catch (e) {
            console.log(e)
            setError("Error searching movies.");
        }
        setIsLoading(false);
    };

    const handleMovieDetails = async (id) => {
        setIsLoading(true);
        try {
            const movie = await getMovieDetails(id);
            setSearchResults([]);
            setMovie(movie);
            setError(null);
        } catch (e) {
            setError("Error getting movie details.");
        }
        setIsLoading(false);
    };

    return (
        <div id="search">
            <h1>Movies Search</h1>
            <SearchView onSearch={handleSearch} isLoading={isLoading} />
            {error && <div className="error">{error}</div>}
            {/* {console.log(searchResults.length)} */}
            {searchResults.length > 0 ?
                // console.log(searchResults)
                <SearchViewModel results={searchResults} onMovieDetails={handleMovieDetails} />
                : ""}
            <MovieDetailsView />
        </div>
    );
};

export default Main