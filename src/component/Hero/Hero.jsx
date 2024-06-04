import React from 'react'
import Image1 from "../../assets/Iphone.jpg";
import Image2 from "../../assets/Samsung.jpg";
import Image3 from "../../assets/secondhand.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css" ;
import "slick-carousel/slick/slick-theme.css" ;

const ImageList = [
{
id : 1,
Image: Image1,
Title: "Iphone for sale and buying",
Description: "อยากเป็นแฟนเธอ",
},

{
  id : 2,
  Image: Image2,
  Title: "Samsung for sale and buying",
  Description: "อยากเป็นแฟนเธอนะคนน่ารัก",
  },

  {
    id : 3 ,
    Image: Image3,
    Title: "Secondhand for sale and buying",
    Description: "อยากเป็นแฟนเธอคนสวย",
    },

];


const Hero = () => {

var settings = {
dots: false,
arrows: false,
infinite: true,
speed: 800,
slideToScroll: 1,
autoplay: true,
autoplaySpeed: 4000,
cssEase: "ease-in-out",
pauseOnHover: false,
pauseOnFocus: true,
};

  return (
    <div className='relative overflow-hidden min-h-[500px] sm:min-h-[650px] bg-gray-100
    flex justify-center item-center duration-200'>

{/* Background pattern  */}
<div className=' h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
</div>

      {/* Hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>  
      {ImageList.map((data) => (
        <div>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
      {/* text content section */}
      <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
      order-2 sm:order-1 relative z-10'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.Title}</h1>
        <p className='text-sm'>
          {data.description}
        </p>
        <div>
          <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200
          text-white py-2 px-4 rounded-full'>
            สั่งซื้อเลย
          </button>
        </div>
      </div>
      {/* image section */}
      <div className=' order-1 sm:order-2 '> 
        <div className='relative z-10'>
          <img src={data.img} alt="" className='w-[500px] h-[450px] sm:h-[450px] sm:h-[450px]
           sm:scale-125 object-contain mx-auto' />  
        </div>
      </div>
        </div>
      </div>
      ))}
</Slider>

      </div>
    </div>
  )
}

export default Hero