export default async function getMovieGenre() {

    const language = "language=en-US"

    const genres = {
        movie: "movie",
        tv: "tv"
    }


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
        }
    };
    let res = await fetch(`${process.env.REACT_APP_BASE_URL.toString()}` + `genre/${genres.movie}/list?${language}`, options, { cache: "no-cache" })
    return res.json()
}



