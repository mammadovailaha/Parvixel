

const services = [
  "Brending",
  "Sosial media dizayn", 
  "Motion dizayn",
  "Loqo dizayn",

]

const SliderComponent = () => {
  return (
    <div className='w-full h-20 bg-white dark:bg-gray-900 px-4 py-2 overflow-hidden flex items-center justify-center'>
      <div className='relative w-full max-w-7xl overflow-hidden rounded-[30px] bg-[#f8f8f8]'>
        <div className='animate-slide flex space-x-8 px-10 py-5 gap-22'>
          {/* İlk dəfə göstərilən elementlər */}
          {services.map((service, index) => (
            <span 
              key={`first-${index}`} 
              className='text-black dark:text-white whitespace-nowrap text-lg font-normal'
            >
              {service}
            </span>
          ))}
          {/* Seamless loop üçün elementlərin təkrarı */}
          {services.map((service, index) => (
            <span 
              key={`second-${index}`} 
              className='text-black dark:text-white whitespace-nowrap text-lg font-normal'
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default SliderComponent