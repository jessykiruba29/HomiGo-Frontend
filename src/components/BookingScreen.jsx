import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookingScreen = () => {
  const navigate = useNavigate()

  const bookings = [
    '16 - fix the tap',
    '25- Gas Service',
    '30- Gardener'
  ]

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

      <section style={{ padding: '20px' }}>
        <h2 style={{
          fontWeight: 800,
          fontSize: '24px',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          My Booking
        </h2>

        <div style={{ marginBottom: '30px' }}>
          <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/c3LK5mayL2.png" 
            alt="Calendar"
            style={{
              width: '405px',
              height: '295px',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
        </div>

        {bookings.map((booking, index) => (
          <div key={index} className="booking-item">
            {booking}
          </div>
        ))}
      </section>
    </main>
  )
}

export default BookingScreen
