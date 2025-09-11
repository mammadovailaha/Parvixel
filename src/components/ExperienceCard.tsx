import React, { type FC } from 'react'
import { RiBuilding2Line } from 'react-icons/ri';
interface ExperienceCardProps{
    startDate:string;
    endDate:string;
    company:string;
    position:string;
}
const ExperienceCard:FC<ExperienceCardProps> = ({startDate, endDate, company, position}) => {
  return (
    <div className='w-[400px] h-[230px] flex flex-col justify-center items-start gap-4  p-5 bg-[#f8f8f9] rounded-[10px]'>
    <p className='text-base font-normal text-black leading-4'>{startDate} - {endDate}</p>
    <h2 className='text-xl font-semibold leading-6 text-black'>{position}</h2>
    <p className='text-base font-normal text-black leading-4 flex justify-center gap-1.5'><RiBuilding2Line className='text-gray-600 text-base' />{company}</p>
    </div>
  )
}

export default ExperienceCard
