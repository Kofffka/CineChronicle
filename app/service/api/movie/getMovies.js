// interface Similar {
//     list: string;
//     page_params: number;

// }
// interface Details {
//     list: string;
//     page_params: number;
//     tmdb_id: number;
// }
export default async function getMovies(list, tmdb_id) {


    const url = `${list}/${tmdb_id}?&append_to_response=videos,images,similar,recommendations,credits`

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


// https://api.themoviedb.org/3/movie/734253/similar?language=en-US&page=1
// https://api.themoviedb.org/3/movie/976573?language=en-US

// https://api.themoviedb.org/3/movie/157336?api_key=f7c73649e2aac25f169fff256a40547a&append_to_response=videos,images

// https://api.themoviedb.org/3/movie/157336?lan&append_to_response=