export default async function getMovie_List(list) {

    // now_playing | upcoming | top_rated | popular FOR TS...

    const language = "language=en-US"
    let page_params = `&page=${1}`



    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
        }
    };
    let res = await fetch(`${process.env.REACT_APP_BASE_URL.toString()}` + `movie/${list}?${language}${page_params}`, options, { cache: "no-cache" })
    return res.json()
}
// https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1 DELETE!!!

