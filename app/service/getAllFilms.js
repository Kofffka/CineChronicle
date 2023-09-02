export default async function getBannerPost () {
    let res = await fetch("http://localhost:3004/movies", {cache: "no-cache"})
    return res.json()
}