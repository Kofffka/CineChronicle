import Image from "next/image"
import Section from "../Section"




export const Element = ({ poster, title, imdbID, year, runtime, plot, imdbRating, language, type, genre }) => {



    return (
        <div>
            <div className='absolute w-full h-full'>
                <Image className={` w-full h-full object-fill`} loading={"lazy"}  width={1920} height={1080} src={poster} alt="Disney Poster" fill={false} />
            </div>




            <Section position={true}  style="flex items-end ">
                <div className="fade-effect__top"></div>
                <div className="fade-effect__bottom"></div>

                <div className={`w-[50%] z-10  text-left`}>

                    <div className={`mb-4`}>
                        <ul className={`flex`}>
                            <li className={` bg-black text-white rounded-lg px-2 py-1 mr-3`}>{type}</li>
                            <li className={` bg-black text-white rounded-lg px-2 py-1`}>{imdbRating}</li>
                        </ul>
                    </div>

                    <div className={`mb-4`}>
                        <span className={`text-white text-4xl`}>
                            {title}
                        </span>
                    </div>
                    <div className={`mb-4`}>
                        <ul className={`flex`}>
                            <li className={`mr-4 text-sm-info`}>{runtime}</li>
                            <li className={`mr-4 text-sm-info`}>{year}</li>
                            <li className={`mr-4 text-sm-info`}>{genre}</li>
                        </ul>
                    </div>
                    <div className={`w-[90%] mb-5`}>
                        <p className={`text-base text-grey`}>
                            {plot}
                        </p>
                    </div>


                    <div className={`mb-20`}>
                        <button className={`border rounded-md border-solid border-white py-3 px-4 mr-6 bg-[#00925D]`}>
                            <i></i>
                            <p>Watch Trailer</p>
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


