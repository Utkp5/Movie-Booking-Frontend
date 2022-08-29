import React,{useState} from 'react';
import "./popularevent.css";
// import laughter1 from "../../Assets/img/laughter/laughter_utkp_1.avif";


function Popularevent() {
    const [Popularevents,setpopularevents] = useState([
        {
            popularImg : require ("../../Assets/img/laughter/laughter_utkp_1.avif"),
            popularName : "Harsh Gujral",
            popularSubname : "DLF Cyber Park Delhi",
        },
        {
            popularImg : require ("../../Assets/img/laughter/laughter_utkp_2.avif"),
            popularName : "Shashi Dhiman Live",
            popularSubname : "Natrang Studo Ahmedabad",
        },
        {
            popularImg : require ("../../Assets/img/laughter/laughter_utkp_3.avif"),
            popularName : "New Jokes",
            popularSubname : "Connaught Place",
        },
        {
            popularImg : require ("../../Assets/img/laughter/laughter_utkp_4.avif"),
            popularName : "Swati Sachedava",
            popularSubname : "Clinque Noida",
        },
        {
            popularImg : require ("../../Assets/img/laughter/laughter_utkp_5.jpg"),
            popularName : "A Standup Comedy",
            popularSubname : "Maharana Auditorium Noida",
        },
        {
            popularImg : require ("../../Assets/img/laughter/laughter_utkp_6.avif"),
            popularName : "Abhishek Upmanyu",
            popularSubname : "Kedarnath Auditorium Delhi",
        },
        {
            popularImg : require ("../../Assets/img/laughter/laughter_utkp_7.jpg"),
            popularName : "Vir Das Wanted Tour",
            popularSubname : "Sirifort Auditorium Delhi",
        },
    ]);
  return (
    <div>
    <div className="featured">
        <div className="featured_info_flex">
          <p className="featured_info_p1" >Featured</p>
          <p className="featured_info_p2" >Popular Events</p>
        </div>
        </div>
        <div className='popular_container'>
        {
            Popularevents.map((popularevents) => {
                return(
                    <div className='popular_main'>
                        <div className='popular_div_img'><a href=""><img className='popular_img' src={popularevents.popularImg} alt="" /></a></div>
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
