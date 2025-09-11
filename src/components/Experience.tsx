import React from 'react'
import ExperienceCard from './ExperienceCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const experience=[
  {
    "id": 1,
    "company": "Saat Store mağazalar şəbəkəsi",
    "position": "Qrafik dizayner",
    "startDate": "Yanvar 2025",
    "endDate": "Aprel 2025"
  },
  {
    "id": 2,
    "company": "Biatoms Academy",
    "position": "Qrafik dizayner / mentor",
    "startDate": "Noyabr 2024",
    "endDate": "May 2025"
  },
  {
    "id": 3,
    "company": "Tripsee.az",
    "position": "Qrafik dizayner",
    "startDate": "Avqust 2024",
    "endDate": "May 2025"
  },
  {
    "id": 4,
    "company": "Readeng Publishing nəşriyyat evi",
    "position": "Qrafik dizayner",
    "startDate": "Avqust 2024",
    "endDate": "Sentiyabr 2024"
  },
  {
    "id": 5,
    "company": "Aseto Group Reklam Agentliyi",
    "position": "Qrafik dizayner / təcrübəçi",
    "startDate": "İyun 2024",
    "endDate": " Avqust 2024"
  }
]


const Experience = () => {
     const settings = {
    dots: true,          // alt nöqtələr
    infinite: true,      // limitsiz dövr etsin
    speed: 500,          // keçid sürəti (ms)
    slidesToShow: 3,     // eyni anda neçə element göstərsin
    slidesToScroll: 1,   // hər dəfə neçə element sürüşsün
    autoplay: true,      // avtomatik sürüşsün
    autoplaySpeed: 2000, // avtomatik keçid sürəti
  };

  return (
    <div className='w-[95%] h-screen flex justify-center items-center gap-5'>
        <Slider {...settings} className='overflow-hidden'>
              {experience.map((item)=>(
        <ExperienceCard
         startDate={item.startDate}
         endDate={item.endDate}
         company={item.company}
         position={item.position}
         />
      ))}
        </Slider>
    
    </div>
  )
}

export default Experience
