export default async function getDiscover(list, page=1) {

    // movie | tv  FOR TS...

    const language = "language=en-US"
    let page_params = `&page=${page}`
    const url = `discover/${list}?${language}${page_params}`

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
// https://api.themoviedb.org/3/discover/movie?language=en-US&page=1 DELETE!!!

