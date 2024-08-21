//import React from 'react'
import { GrSecure } from 'react-icons/gr'
import BannerImg from '../../assets/Women/Women1.jpg'
//import { IoMdPricetags } from "react-icons/io";
import { RiUserLocationLine } from "react-icons/ri";
import { RiNotificationLine } from "react-icons/ri";
//import { Grsecure } from 'react-icons/gr' ; 
//import { IoFastFood } from 'react-icons/io5' ; 
//import { GiFoodTruck } from 'react-icons/gi' ; 


const Banner = () => {
  return (
    <div className='min-h-[500px] flex justify-center items-center py-12
    sm:py-0'>
        <div className='container'>
<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
{/* image section */}
<div data-aos ='zoom-in'> 
  <img src={BannerImg} alt="" 
  className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
  object-cover '
  />
</div>

{/* text detail section */}
<div className='flex flex-col justify-center gap-6 sm:pt-0 '>
  <h1 className='text-3xl sm:text-4xl font-bold '
  >8.8 Sale up to 50% off</h1>
  <p className='text-sm text-gray-500 tracking-wide leading-5'>
ลดราคาสินค้าสมาร์ทโฟนคุณภาพ มอบสิทธิพิเศษดีๆให้กับลูกค้าของ Pluto
  </p>
  <div className='flex flex-col gap-4'>
    <div data-aos='fade-up'
    className='flex items-center gap-4 '
    >
      <GrSecure 
      className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100'
      />
      <p>ปลอดภัยในการซื้อขาย</p>

      
    </div>
    <div data-aos='fade-up' className='flex items-center gap-4 '>

    <div data-aos='fade-up'
    className='flex items-center gap-4 '
    >
      <RiNotificationLine
      className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100'
      />
      <p>ระบบการแจ้งเตือนที่รวดเร็ว</p>
      </div>

   <div data-aos='fade-up'
    className='flex items-center gap-4 '
    >
      < RiUserLocationLine
      className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100'
      />
      <p>สามารถนัดพบเพื่อดูสินค้าได้</p>
      </div>

{/* < 
IoMdPricetags className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100'
  /> 
 */}                                         

    </div>
  </div>
</div>
</div>
        </div>
    </div>
  )
}

export default Banner