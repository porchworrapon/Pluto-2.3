//import React from 'react'
//import Products from "../Products/Products"
import Image1 from "../../assets/samsung/Image1.jpg"
import Image2 from "../../assets/samsung/Image2.webp"
import Image3 from "../../assets/samsung/Image3.webp"
import Image4 from "../../assets/samsung/Image4.jpg"
import Image5 from "../../assets/samsung/Image5.png"
//import { FaStar } from "react-icons/fa"
const ProductsData = [
    {
        id : 1,
        Image: Image1 ,
        Title: "Iphone for sale and buying",
        Description: "สมาร์ทโฟนที่ใช้งานง่ายและหรูหรา ราคาสบายกระเป๋า",
        },
        
        {
          id : 2,
          Image: Image2,
          Title: "Iphone for sale and buying",
          Description: "สมาร์ทโฟนที่ใช้งานได้หลากหลายฟังก์ชัน ราคาสบายกระเป๋า",
          },
        
          {
            id : 3 ,
            Image: Image3,
            Title: "Samsung for sale and buying",
            Description: "สมาร์ทโฟนคุณภาพดี ราคาสบายกระเป๋า",
            },

            {
                id : 4 ,
                Image: Image4,
                Title: "Samsung for sale and buying",
                Description: "สมาร์ทโฟนคุณภาพดี ราคาสบายกระเป๋า",
                },

                {
                    id : 5 ,
                    Image: Image5,
                    Title: "Samsung for sale and buying",
                    Description: "สมาร์ทโฟนคุณภาพดี ราคาสบายกระเป๋า",
                    },
]
const TopProduct = () => {
  return (
    <div>
        <div className="container">
{/* Header section */}
<div className='text-left mb-10 '>
    <p data-aos='fade-up' className='text-sm text-primary'>สินค้าขายดีอันดับหนึ่งของร้าน</p>
    <h1 data-aos='fade-up' className='text-3xl font-bold'>สินค้าขายดี</h1>
    <p data-aos='fade-up' className='text-xs text-gray-400'>ของโครตดี</p>
</div>

{/* Body section */}
<div
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md: gap-5 place-item-center"
>
{
    ProductsData.map((data,index) => (
    <div key = {index}
    className="rounded-2xl bg-white dark:bg-gray-800
     hover:bg-black/80 dark:hover:bg-primary
    hover:text-white relative shadow-xl duration-300 group max-w-[300px] "
    >
      {/* image section */}
<div>
    <img src={data.Image} alt="" 
   /*  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 
    duration-300 drop-shadow-md" */
    />
</div>
      {/* details section */}
 </div>
    ))}
</div>
        </div>
    </div>
  )
}

export default TopProduct