
import Image from "next/image"
import Section from "../Section"




export const Element = (props) => {



    return (
        <>
            <div className='absolute w-full h-full'>
                <Image className={` w-full h-full object-fill`} loading={"lazy"}  width={1920} height={1080} src={data.poster} alt="Disney Poster" fill={false} />
            </div>




            <Section position={true} style="flex items-end ">
                <div className="fade-effect__top"></div>
                <div className="fade-effect__bottom"></div>

                <div className={`w-[50%] h-[40vh] z-10 `}>

                    <div className={`mb-4`}>
                        <ul className={`flex`}>
                            <li className={` bg-black text-white rounded-lg px-2 py-1 mr-3`}>{data?.type}</li>
                            <li className={` bg-black text-white rounded-lg px-2 py-1`}>{data?.imdbRating}</li>
                        </ul>
                    </div>

                    <div className={`mb-4`}>
                        <span className={`text-white text-4xl`}>
                            {data?.title}
                        </span>
                    </div>
                    <div className={`mb-4`}>
                        <ul className={`flex`}>
                            <li className={`mr-4 text-sm-info`}>{data?.runtime}</li>
                            <li className={`mr-4 text-sm-info`}>{data?.year}</li>
                            <li className={`mr-4 text-sm-info`}>{data?.genre}</li>
                        </ul>
                    </div>
                    <div className={`w-[90%] mb-5`}>
                        <p className={`text-base text-grey`}>
                            {data?.plot}
                        </p>
                    </div>


                    <div className={`mb-4`}>
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

        </>
    )
}


