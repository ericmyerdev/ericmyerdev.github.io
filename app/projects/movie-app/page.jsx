"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const Index = () => {
    const [Movies, setMovies] = useState([])
    const [SearchValue, setSearchValue] = useState('')

    const base_url = 'https://api.themoviedb.org/3'
    const api_key = '33569a384f528b4860280849803dc660'

    const FetchMovies = () => {
        const url_type = SearchValue.length < 1 ? 'movie/popular' : 'search/movie'

        const params = new URLSearchParams({
            api_key: api_key,
            query: SearchValue
        })

        fetch(`${base_url}/${url_type}?${params}`)
            .then(res => res.json())
            .then(({ results }) => {
                results.map(({ id }) => getMovieDetails(id))
            })
    }

    const getMovieDetails = async (id) => {
        fetch(`${base_url}/movie/${id}?api_key=${api_key}`)
            .then(res => res.json())
            .then((data) => {
                data && setMovies((currentState) => [...currentState, data])
            })


    }

    const handleSearch = (event) => {
        event.preventDefault()
        console.log(event)
    }

    const handleSearchValue = ({ target }) => {
        setSearchValue(target.value)
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`)
            .then((res) => console.log(res.data))


        setMovies([])
        FetchMovies()
    }, [SearchValue])

    return (
        <div className={style.app}>
            <form className={style.searchBar} onSubmit={handleSearch}>
                <input className={style.searchValue} type="text" placeholder='Search' value={SearchValue} onChange={handleSearchValue} required />
            </form>
            <div className={style.movieGrid}>
                {Movies.map(({ title, vote_average, overview, poster_path }, idx) =>
                    <div key={idx} className={style.movieCard}>
                        <div className={style.poster}>
                            <img src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                            <div>{overview}</div>
                        </div>
                        <div className={style.details}>
                            <div className={style.title}>{title}</div>
                            <div className={style.rating} style={{
                                color: `rgb(${-((vote_average * .1) * 255) + 255}, ${(vote_average * .1) * 255}, 50)`
                            }}>{vote_average}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Index