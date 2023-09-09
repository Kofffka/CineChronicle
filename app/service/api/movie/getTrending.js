export default async function getTrending(list, time_window) {

    // movie | tv for TS
    // day | week 

    const url = `trending/${list}/${time_window}?language=en-US`

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
        }
    };
    let res = await fetch(`${process.env.REACT_APP_BASE_URL.toString()}` + `${url}`, options, { cache: "no-cache" })
    return res.json()
}


// https://api.themoviedb.org/3/trending/movie/day?language=en-US