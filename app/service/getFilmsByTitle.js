export default async function getFilmsByTitle (title) {
    let res = await fetch(`http://localhost:3004/movies?title=${title}`, {cache: "no-cache"})
    return res.json()
}


