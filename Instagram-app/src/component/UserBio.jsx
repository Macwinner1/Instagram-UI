import React from 'react'
import Imageprof from '../assets/Ellipse 1.png'
import stroke from '../assets/Vector 10 (Stroke).svg'
import user from '../assets/user-svgrepo-com.svg'
import FollowCount from './FollowCount'
import BioPage from './BioPage'
function UserBio() {
  return (
    <div id='userBio'>
        <div className='bioL'>
            <img src={Imageprof} alt="profile-pic" />
        </div>
        <div className='bioR'>
            <div className='bioR1'>
            <h1>Techbridge</h1>
            <button>send a message</button>
            <div className='verify-user'>
            <img src={stroke}  />
            <img src={user} />
            </div>
            <i class='bx bx-chevron-down'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
            </div>
            <FollowCount />
            <BioPage />
        </div>
    </div>
  )
}

export default UserBio
