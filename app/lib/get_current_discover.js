import getDiscover from "../service/api/movie/getDiscover";



export async function getTestResponse (page) {
    const response = await getDiscover("movie", page)

    return response.json()
}