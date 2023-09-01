export default async function getBannerPost () {
    let res = await fetch("http://localhost:3003/movies", {cache: "no-cache"})
    return res.json()
}