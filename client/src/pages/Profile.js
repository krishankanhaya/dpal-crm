import React from 'react'
import '../styles/Profile.css'
import ProfilePic from '../assets/images/ProfilePic.jpg';

function Profile() {
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Profile</h2>
        <div class="card">
          <img src={ProfilePic} alt="username" style={{width:'6rem', borderRadius: '4px', marginTop: '1rem'}} />
          <p class="title">Email :  example@gmail.com</p>
          <p class="title">Address : US</p>
          <p class="title">Phone : +1234567890</p>
          <p class="title">Website : expamle.com</p>
          <p class="title">Company : example</p>
        </div>
    </div>
  )
}

export default Profile;