import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmationScreen = () => {
  const navigate = useNavigate()

  return (
    <main className="screen">
      <header className="header">
        <img 
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/uhi.png" 
          alt="Logo"
          className="logo"
        />
        <img 
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/three%20orange.png" 
          alt="Profile"
          className="profile-icon"
          onClick={() => navigate('/profile')}
          style={{
              width: '60px',
              height: '60px',
              objectFit: 'cover',
              marginTop: '20px'
            }}
        />
      </header>

      <section className="confirmation-content">
        <img 
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/uhi.png" 
          alt="Confirmation"
          className="confirmation-icon"
        />
        
        <div className="confirmation-text">
          Booking Confirmed
        </div>
        
        <div className="brand-text">
          Homigo - your home buddy
        </div>
      </section>
    </main>
  )
}

export default ConfirmationScreen
