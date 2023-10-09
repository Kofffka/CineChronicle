
import GENRE from "../const/genre";


export default function getGenre(genre_ids=[]) {


    let res = new Array()


    genre_ids.forEach((genre, index) => {
        GENRE.genres.forEach((element, ind) => {
            if (element.id === genre) {
                res.push(element.name)
            }
        })
    })

    return res
}