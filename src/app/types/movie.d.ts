export type MovieImage = {
    medium: string
    original: string
}

export type Movie = {
    id: number
    name: string
    premiered: string
    ended: string
    genres: string[]
    image: MovieImage
    summary: string
    rating: {
        average: number
    }
}