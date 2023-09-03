export default async function getBannerPost () {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}