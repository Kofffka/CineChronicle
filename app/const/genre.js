import getMovieGenre from "../service/api/movie/getMovieGenre";



let GENRE = new Object();

(async function () {

    let data = await getMovieGenre()
    GENRE.genres = data.genres

    console.log(GENRE)
})();

export default GENRE;



// export default async function getGenre(genre_ids) {
//     let res = new Array()
//     genre_ids.forEach((genre, index) => {
//         GENRE.genres.forEach((element, ind) => {
//             if (element.id === genre) {
//                 res.push(element.name)
//             }
//         })
//     })

//     return res
// }

