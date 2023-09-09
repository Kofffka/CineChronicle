// export default async function getProviders(providers) {

//     // movie | tv | regions  FOR TS...

//     const language = "language=en-US"



//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
//         }
//     };
//     let res = await fetch(`${process.env.REACT_APP_BASE_URL.toString()}` + `watch/providers/${providers}?${language}`, options, { caches: "force-cache"})
//     return res.json()
// }
// // https://api.themoviedb.org/3/watch/providers/movie?language=en-US DELETE!!!

