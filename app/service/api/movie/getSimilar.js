export default async function getSImilar(id) {

    const language = "language=en-US"
    let page_params = `&page=${1}`

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
        }
    };
    let res = await fetch(`${process.env.REACT_APP_BASE_URL.toString()}` + `movie/${id}/similar?${language}${page_params}`, options, { cache: "no-cache" })
    return res.json()
}


