


// https://api.themoviedb.org/3/movie/734253/similar?language=en-US&page=1



export default async function getTrending(list, time_window) {

    // movie | tv for TS
    // day | week 

    const url = `trending/${list}/${time_window}?language=en-US`

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
