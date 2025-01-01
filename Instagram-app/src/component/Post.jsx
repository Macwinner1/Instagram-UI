import React from 'react'
import PostImg from '../assets/Rectangle 60 (2).png'
import { BiSolidMoviePlay } from "react-icons/bi";
import PostImg1 from '../assets/Rectangle 61 (2).png'
import PostImg2 from '../assets/Rectangle 62 (1).svg'
import { BsGrid3X3 } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";



function Post() {
  return (
    <div className='Post-wrap'>
      <hr />
      <div className='Post-head'>
        <div className='sub-ph'><BsGrid3X3/>PUBLICATIONS</div>
        <div className='sub-ph'><BiSolidMoviePlay /> REELS</div>
        <div className='sub-ph'><IoMdContact /> MARKS</div>
      </div>
    <div id='Post-sec'>
      <div className='post'><img src={PostImg} alt="post img" /></div>
      <div className='post'><img src={PostImg1} alt="post img" /></div>
      <div className='post'><img src={PostImg2} alt="post img" /></div>
      <div className='post'><img src={PostImg1} alt="post img" /></div>
      <div className='post'><img src={PostImg2} alt="post img" /></div>
      <div className='post'><img src={PostImg} alt="post img" /></div>
      <div className='post'><img src={PostImg2} alt="post img" /></div>
      <div className='post'><img src={PostImg} alt="post img" /></div>
      <div className='post'><img src={PostImg1} alt="post img" /></div>
      <div className='post'><img src={PostImg} alt="post img" /></div>
      <div className='post'><img src={PostImg2} alt="post img" /></div>
      <div className='post'><img src={PostImg} alt="post img" /></div>
      <div className='post'><img src={PostImg1} alt="post img" /></div>
      <div className='post'><img src={PostImg2} alt="post img" /></div>
      <div className='post'><img src={PostImg} alt="post img" /></div>
    </div>
    </div>
  )
}

export default Post
