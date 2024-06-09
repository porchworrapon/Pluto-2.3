// import { data } from 'autoprefixer'
//import React from 'react'
import Image1 from "../../assets/Iphone/img1.jpg";
import Image2 from "../../assets/Iphone/img2.jpg";
import Image3 from "../../assets/Iphone/img3.jpg";
import Image4 from "../../assets/Iphone/img4.jpg";
import Image5 from "../../assets/Iphone/img5.webp";
import {FaStar} from "react-icons/fa6";


const ProductsData = [
    {
        id : 1,
        Image: Image1 ,
        Title: "Iphone",
        Rating: "4.6",
        color: "white",
        aosDelay: "0",
        },
        
        {
          id : 2,
          Image: Image2,
          Title: "Iphone",
          Rating: "4.9",
          color: "gray",
          aosDelay: "200",
          },
        
          {
            id : 3 ,
            Image: Image3,
            Title: "Iphone",
            Rating: "4.1",
            color: "black",
            aosDelay: "400",
            },
        
            {
                id : 4 ,
                Image: Image4,
                Title: "Iphone",
                Rating: "4.2",
                color: "red",
                aosDelay: "600",
                },

                {
                    id : 5 ,
                    Image: Image5,
                    Title: "Iphone",
                    Rating: "4.5",
                    color: "green",
                    aosDelay: "800",
                    },
];

const Products = () => {
  return (
    <div className='mt-14 mt-12'>
        <div className='container'>
{/* Header Section */}
<div className='text-center mb-10 max-w-[600px] mx-auto'>
    <p className='text-sm text-primary'>สินค้าขายดี</p>
    <h1 className='text-3xl font-bold'>สินค้าของเรา</h1>
    <p className='text-xs text-gray-400'>456</p>
</div>

{/* Body Section */}
<div>
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
    place-item-center gap-5 '>
{/* card section */}
{
    ProductsData.map((data,index) => (
<div key = {index}>
<img src={data.Image} alt="" 
className="h-[220px] w-[220px]"
/>
</div>
    ) )
}
    </div>
</div>
        </div>
    </div>
  )
}

export default Products