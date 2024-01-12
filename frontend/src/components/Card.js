import { Link } from "react-router-dom";
import RadialProgressBar from "./Radial";

const imageBaseUrl = 'https://image.tmdb.org/t/p/w780';


const Card = (props) => {
    return (
        <Link to={'/movie/' + props?.data?.id}>

            <div className='mr-2 md:mr-4 h-full w-full mt-1 relative'>
                <div className='h-[150px] w-[100px] md:h-[250px] md:w-[220px] rounded-xl  overflow-hidden '>
                    <img className='h-full w-full z-0' src={`${imageBaseUrl}${props?.data?.poster_path}`} />
                    <div className="absolute bottom-10  z-50">

                        <RadialProgressBar value={props?.data.vote_average?.toFixed(1)} />
                    </div>
                </div>
                <div className='mt-2 ml-2 font-semibold text-white text-sm'>
                    <p className="truncate">{props?.data?.title}</p>
                    {/* <p className='text-[10px] font-normal'>{props.data.id}</p> */}
                </div>
            </div>
        </Link>
    )
}
export default Card