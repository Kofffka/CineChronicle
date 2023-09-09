import Image from "next/image"
import Section from "../Section"

import { IMAGE_SIZE } from "@/app/const/size"
import { base_image_path } from "@/app/const/base_image_path"
import Link from "next/link"
import getGenre from "@/app/lib/get_current_genre"





// function getGenre(genre_ids) {
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


export default function Element({ title, original_language, overview, backdrop_path, poster_path, popularity, release_date, video, media_type, genre_ids, vote_average, id }) {


    const genre_data = getGenre(genre_ids)


    return (
        <div>
            <div className='absolute w-full h-full'>
                <Image className={` w-full h-full object-fill`} loading={"lazy"} width={IMAGE_SIZE.Backdrop.width} height={IMAGE_SIZE.Backdrop.height} src={base_image_path + `w${IMAGE_SIZE.Backdrop.width}` + backdrop_path} alt="Disney Poster" fill={false} />
            </div>




            <Section position={true} style="flex items-end ">
                <div className="fade-effect__top"></div>
                <div className="fade-effect__bottom"></div>

                <div className={`w-[50%] z-10  text-left`}>

                    <div className={`mb-4`}>
                        <ul className={`flex`}>
                            {/* <li className={` bg-black text-white rounded-lg px-2 py-1 mr-3`}>{media_type}</li> */}
                            <li className={` bg-black text-white rounded-lg px-2 py-1`}>{original_language}</li>
                        </ul>
                    </div>

                    <div className={`mb-4`}>
                        <span className={`text-white text-4xl`}>
                            {title}
                        </span>
                    </div>
                    <div className={`mb-4`}>
                        <ul className={`flex`}>
                            <li className={`mr-4 text-sm-info`}>{vote_average}</li>
                            <li className={`mr-4 text-sm-info`}>{release_date}</li>
                            <ul className={`flex`}>
                                {
                                    genre_data.map((element, index) => {
                                        return (
                                            <li key={index} className={`mr-4 text-sm-info`}>{element}</li>
                                        )
                                    })
                                }
                            </ul>
                        </ul>
                    </div>
                    <div className={`w-[90%] mb-5`}>
                        <p className={`text-base text-grey`}>
                            {overview}
                        </p>
                    </div>


                    <div className={`mb-20`}>
                        <button className={`border rounded-md border-solid border-white py-3 px-4 mr-6 bg-[#00925D]`}>
                            <Link href={`/discover/search/${id}`}>
                                <i></i>
                                <p>
                                    {
                                        video ? "Watch Trailer" : "Discover"
                                    }
                                </p>
                            </Link>
                        </button>
                        <button className={`border rounded-md border-solid border-white py-3 px-4`}>
                            <i></i>
                            <p>Add Watchlist</p>
                        </button>
                    </div>
                </div>
            </Section>

        </div>
    )
}


