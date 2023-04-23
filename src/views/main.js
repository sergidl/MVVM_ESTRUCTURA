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
            setError(e);
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
            setError(e);
        }
        setIsLoading(false);
    };

    return (
        <div id="search">
            <h1>Movies Search</h1>
            <SearchView onSearch={handleSearch} isLoading={isLoading} />
            {error && <div className="error">{error}</div>}
            {searchResults.length > 0 ?
                <SearchViewModel results={searchResults} onMovieDetails={handleMovieDetails} />
                : ""}
            <MovieDetailsView />
        </div>
    );
};

export default Main