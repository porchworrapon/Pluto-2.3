import React from 'react'
import Banner from '../../assets/Website/red.jpg'

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
}

const Subscribe = () => {
  return (
    <div
    data-aos='zoom-in'
    className='md-20 bg-gray-100 dark:bg-gray-800 text-white'
    style={BannerImg}
    >
      <div className='container backdrop-blur-sm py-9'>
<div className='space-y-6 max-w-xl mx-auto'>
  <h1 className='text-xl !text-center sm:text-left '
  >รับข่าวสารใหม่จากเรา</h1>
  <input data-aos= "fade-up" 
  type='text'
  placeholder='กรอกอีเมลของคุณ'
  className='w-full p-1 text-black'
    
  />
</div>
      </div>
    </div>
  )
};

export default Subscribe