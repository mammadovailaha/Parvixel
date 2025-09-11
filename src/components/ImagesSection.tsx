import React from 'react';
import img1 from "../assets/images/POSTLAR/23 ECONOM suv/toyota.png";
import img2 from "../assets/images/POSTLAR/MERCEDES/21/MERCEDES COVER.png";
import img3 from "../assets/images/POSTLAR/mckp1.png";
import img4 from "../assets/images/POSTLAR/13/byd.png";
import img5 from "../assets/images/POSTLAR/MCKP2.png";
import img6 from "../assets/images/POSTLAR/25/leopard 8.png";
import img7 from "../assets/images/POSTLAR/muqayise.png";
import img8 from "../assets/images/POSTLAR/offroad/11/haval.png";
import img9 from "../assets/images/POSTLAR/premium/21/TESLA.png";
import img10 from "../assets/images/POSTLAR/BYDD/22/byd cover.png";
import img11 from "../assets/images/POSTLAR/4.png";
import img12 from "../assets/images/POSTLAR/offroad/11/jetour.png";

const ImagesSection = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    const column1 = images.slice(0, 4);
    const column2 = images.slice(4, 8);
    const column3 = images.slice(8, 12);

    return (
        // Ana div-den "overflow-hidden" klassını çıxartdım.
        // Hər bir sütun div-inə konkret bir hündürlük verdim (məsələn, h-[500px]).
        // Bu, scroll bar-ın hər zaman yaranmasını təmin edir.
        <div className='w-[95%] h-screen flex justify-center items-center gap-5 px-2 rounded-[40px] bg-black overflow-y-srcoll scrollbar-hide '>
            {/* Column 1 */}
            <div className='w-[340px] h-[730px] overflow-y-scroll  scrollbar-hide flex flex-col justify-center items-center gap-4'>
                {column1.map((imgSrc, index) => (
                    <div key={index} className='w-[100%] h-[400px] rounded-[20px]'>
                        <img className='w-full h-full object-cover rounded-[20px]' src={imgSrc} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Column 2 */}
            <div className='w-[340px] h-[730px] overflow-y-scroll  scrollbar-hide flex flex-col justify-center items-center gap-4 p-5 bg-black'>
                {column2.map((imgSrc, index) => (
                    <div key={index} className='w-[100%] h-[400px] rounded-[20px]'>
                        <img className='w-full h-full object-cover rounded-[20px]' src={imgSrc} alt={`Image ${index + 4}`} />
                    </div>
                ))}
            </div>

            {/* Column 3 */}
            <div className='w-[340px] h-[730px] overflow-y-scroll  scrollbar-hide flex flex-col justify-center items-center gap-4'>
                {column3.map((imgSrc, index) => (
                    <div key={index} className='w-[100%] h-[400px] rounded-[20px]'>
                        <img className='w-full h-full object-cover rounded-[20px]' src={imgSrc} alt={`Image ${index + 7}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesSection;