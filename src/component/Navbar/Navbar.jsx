//import React from 'react';
import Logo from '../../assets/Logo.png';
import { LuSearchCheck } from "react-icons/lu";
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from "react-icons/fa6";

const Menu = [
{
    id:1,
    name:"ซื้อสมาร์ทโฟน",
    link:"/#",
},
{
    id:2,
    name:"ขายสมาร์ทโฟน",
    link:"/#",
},
{
    id:3,
    name:"คำถามที่พบบ่อย",
    link:"/#",
},

{
    id:4,
    name:"ติดต่อเรา",
    link:"/#",
},




]

const Dropdownlink = [
    {
        id:1,
        name:"สินค้ามาแรง",
        link:"/#",
    },
    {
        id:2,
        name:"สินค้าขายดี",
        link:"/#",

    },
    {
        id:3,
        name:"ให้คะแนนสูงสุด",
        link:"/#",
    },
]
const Navbar = () => {
  return (
    <div className='shadow-md bg-white  dark:text-black duration-200 relative z-40'>
{/* upper Navbar */}
<div className='bg-primary py-3 '>
    <div className='container flex justify-between items-center '>
        <div>
            <a href="#"
            className='font-bold text-2xl sm:text-3xl flex gap-2'
            >
                <img src={Logo} alt="Logo" 
                className = "w-20"
                />
            </a>
        </div>
       {/*  search bar and order button */}
       <div className='flex justify-between items-center gap-4 group'>
        <div className='relative group hidden sm:block'>
            <input type="text" placeholder="ค้นหาสมาร์ทโฟน" 
            className='w-[200px] sm:w[200px]
            group-hover:w-[300px] transition-all 
            duration-300 rounded-full
            border border-gray-300 px-1.5 py-1.5 focus:outline-none
            focus:border-1 focus:border-primary'
            />
<LuSearchCheck 
className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' 
/>
        </div>
         {/*     order button  */}
   <button
   onClick={ () => alert("ยังอยู่ในรุ่น Beta")}
   className=' text-white
   py-1 px-4 rounded-full flex items-center gap-3 group'
   >
    <span 
    className='group-hover:block hidden transition-all duration-200'
    >ตะกร้าสินค้า</span>
    <FaCartShopping
    className='text-xl text-white drop-shadow-md cursor-pointer '
    />
   </button>
       </div>
  
 
    </div>
</div>
{/* lower Navbar */}
<div className='flex justify-center'>
<ul className='sm:flex hidden item-center gap-4 '>
  

    {
        Menu.map((data) => (
<li key={data.id}>
    <a href={data.link}
    className=' inline-block px-3 hover:text-primary duration-200 py-2'
    >{data.name}
    </a>
</li>


        ))}
  {/* simple dropdown menu */}
  <li className='group relative cursor-pointer'>
<a href="#" className='flex items-center gap-[2px] py-2 px-3 '
>
    สินค้าเฉพาะคุณ
    <span>
<FaCaretDown
className = " translate-all duration-200 group-hover:rotate-180"/>
    </span>
</a>
  
<div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md
bg-white p-2 text-black shadow-md '>
    <ul>
        {Dropdownlink.map((data) => (
            <li key={data.id}>
                <a href={data.link}
                className='inline-block w-full rounded-md p-2 hover:bg-primary/40'
                > {data.name}
                </a>
            </li>
        ))}
    </ul>
</div>
</li>
</ul>
</div>

    </div>
  );
};

export default Navbar