import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const navigate = useNavigate()

  const menuItems = [
    { name: 'Profile', path: '/profile' },
    { name: 'Notification', path: '/notifications' },
    { name: 'My Bookings', path: '/bookings' },
    { name: 'Map', path: '/location' },
    { name: 'Home', path: '/home' }
  ]

  return (
    <div className="profile-container">
      <img
        src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/RFzbo2f3bb.png"
        className="back-button"
        onClick={() => navigate('/home')}
        alt="Back"
      />

      <div className="menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item" onClick={() => navigate(item.path)}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileScreen
