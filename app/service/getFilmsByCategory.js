export default async function getById (id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}