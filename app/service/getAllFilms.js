export default async function getAllFIlms () {
    let res = await fetch("http://localhost:3004/movies")
    return res.json()
}