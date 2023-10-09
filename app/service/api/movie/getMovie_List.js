export default async function getMovie_List(list) {

    // now_playing | upcoming | top_rated | popular FOR TS...

    const language = "language=en-US"
    let page_params = `&page=${1}`
    const url = `movie/${list}?language=en-US${page_params}`


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
        },
        cache: 'no-store' 
    };
    let res = await fetch(`${process.env.REACT_APP_BASE_URL.toString()}` + `${url}`, options )
    return res.json()
}
// https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1 DELETE!!!

// https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1 

