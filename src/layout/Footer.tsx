import React from 'react'
import { FaBehance, FaInstagram } from 'react-icons/fa'
import { TbBrandLinkedin } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const sosialLinks = [
  {id:1, icon:<FaInstagram/>, link:"https://www.instagram.com/"},
  {id:2, icon:<TbBrandLinkedin/>, link:"https://www.linkedin.com/in/parvin-gasimova-298784318/?locale=ru_RU"},
  {id:3, icon:<FaBehance/>, link:"https://www.behance.net/parvingasimova"},
]

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[350px] flex justify-center items-center bg-black">
    <div className='w-[90%] h-[90%] rounded-lg flex flex-col justify-center items-center gap-5'>
 <div className='w-full h-[80%] flex justify-between items-center text-white  border-b border-gray-500/40'>
  <h1 className='text-2xl md:text-5xl font-bold text-white mt-4'>Brendləri <span className='text-2xl md:text-5xl  text-gray-400'> dizayn</span> vasitəsilə  gücləndiririk</h1>
   <div className='flex gap-5 '>
   {sosialLinks.map(link => (
     <Link key={link.id} className='w-10 h-10 border border-gray-300/60 rounded-full flex justify-center items-center  hover:bg-white hover:border-white transition-all ease-in-out delay-200 text-white hover:text-black text-xl' to={link.link}>
       {link.icon}
     </Link>
   ))}
   </div>

 </div>

<div className='w-full md:w-[70%] xl:w-[50%] flex justify-between items-center text-white pt-5'>
  <div className='flex flex-col gap-2.5 '>
    <p className='text-xl md:text-3xl text-white '>Azərbaycan, <span className='text-xl md:text-3xl text-gray-400'>Bakı</span></p>

    </div>
          <div className='flex flex-col gap-2.5 '>
            <h2 className='text-xl md:text-3xl text-white'>Əlaqə</h2>
      <p className='text-sm md:text-xl text-gray-400'>+994 50 554 75 68</p>
      <p className='text-sm md:text-xl text-gray-400'>parvin.gasimova@inbox.ru</p>
    </div>
   
</div>
<div><p>© 2025 Parvin Gasimova</p></div>
    </div>
    </div>
  )
}

export default Footer
