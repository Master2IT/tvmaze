import {Movie} from "@/app/types/movie";
import {Col, Row} from "antd";
import MovieCard from "@/app/components/Card";
import {useContext, useEffect, useState} from "react";
import {MovieContext} from "@/app/contexts/MovieContext";
import MovieTable from "@/app/components/Movies/MovieTable";
import SkeletonLoading from "@/app/components/Skeleton";
import Image from "next/image";

const MoviesList = () => {
    const {constraints, setConstraints} = useContext(MovieContext)!;
    const [movies, setMovies] = useState<Movie[]>([]);
    const [notFound, setNotFound] = useState(false);

    const fetchMovie = async () => {
        if (!constraints.search) return;

        setNotFound(false)

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${constraints.search}`);
        const data = await response.json();
        if (data.length === 0) {
            setMovies([]);
            setNotFound(true);
            return;
        }
        setMovies(data.map((movie: { show: Movie }) => movie.show).map((movie: Movie) => ({
            id: movie.id,
            name: movie.name,
            image: movie.image || "https://via.placeholder.com/250x250?text=Movie",
            genres: movie.genres,
            premiered: movie.premiered,
            ended: movie.ended,
            rating: movie.rating,
            summary: movie.summary
        })));
    }

    useEffect(() => {
        fetchMovie()
    }, [constraints.search]);

    return (
        <>
            {
                !notFound ?
                    constraints.search && movies.length === 0 ? <SkeletonLoading/> : constraints.typeList == 'card' ?
                        <Row gutter={12}>
                            {
                                movies.map((movie: Movie) => (
                                    <Col className="mb-4 pl-1" span={4}>
                                        <MovieCard key={movie.id} movie={movie}/>
                                    </Col>
                                ))
                            }
                        </Row> : <MovieTable movies={movies}/> :
                    <div className="w-full h-[calc(100vh-100px)] flex flex-col items-center justify-center">
                        <Image width={500} height={500} src="/no-movie.jpg" alt="not-found"/>
                        <p className="text-gray-600 text-md">The list is empty!</p>
                    </div>
            }
        </>
    )
}

export default MoviesList;