import React,{useState} from 'react';
import "./popularevent.css";
import laughter1 from "../../Assets/img/laughter/laughter_utkp_1.avif";


function Popularevent() {
    const [popularevents,setpopularevents] = useState([
        {
            popularImg : {laughter1},
            popularName : "Hrash Gujral",
            popularSubname : "Jo bolta Hai Wohi Hota Hai",
        },
        {
            popularImg : {laughter1},
            popularName : "Hrash Gujral",
            popularSubname : "Jo bolta Hai Wohi Hota Hai",
        },
        {
            popularImg : {laughter1},
            popularName : "Hrash Gujral",
            popularSubname : "Jo bolta Hai Wohi Hota Hai",
        },
        {
            popularImg : {laughter1},
            popularName : "Hrash Gujral",
            popularSubname : "Jo bolta Hai Wohi Hota Hai",
        },
        {
            popularImg : {laughter1},
            popularName : "Hrash Gujral",
            popularSubname : "Jo bolta Hai Wohi Hota Hai",
        },
        {
            popularImg : {laughter1},
            popularName : "Hrash Gujral",
            popularSubname : "Jo bolta Hai Wohi Hota Hai",
        }

    ]);
  return (
    <div>
        <div className='popular_container'>
        {
            popularevents.map((popularevents) => {
                return(
                    <div className='main'>
                        <div className='popular_div_img'><img className='popular_img' src={popularevents.popularImg} alt="" /></div>
                        <div className='popular_name' >{popularevents.popularName}</div>
                        <div className='popular_subname' >{popularevents.popularSubname}</div>
                    </div>
                )
            })
        }      
        </div>
    </div>
  )
}

export default Popularevent
