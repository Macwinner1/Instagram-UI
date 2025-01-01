import React from 'react'
import redHeart from '../assets/redHeart.svg'
import blueHeart from '../assets/blueHeart.svg'


function ReelSection() {
  return (
    <div className='reel-sec'>
        <div>
        <img src={redHeart} alt="Template" />
        <p>Template</p>
        </div>
        <div>
        <img src={blueHeart} alt="Reviews" />
        <p>Reviews</p>
        </div>
        <div>
        <img src={redHeart} alt="Mentions" />
        <p>Mentions</p>
        </div>
        <div>
        <img src={blueHeart} alt="Tips" />
        <p>Tips</p>
        </div>
        <div>
        <img src={redHeart} alt="Blog" />
        <p>Blog</p>
        </div>
    </div>
  )
}

export default ReelSection
