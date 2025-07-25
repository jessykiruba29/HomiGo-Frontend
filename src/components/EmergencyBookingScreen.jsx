import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const EmergencyBookingScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const service = location.state?.service

  const emergencyProviders = [
    { name: 'Anu', distance: '0.5 km' },
    { name: 'Balu', distance: '0.5 km' },
    { name: 'Chandru', distance: '1 km' },
    { name: 'Dharan', distance: '2 km' },
    { name: 'Mani', distance: '3 km' }
  ]

  const handleBook = () => {
    navigate('/call')
  }

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
          Emergency Booking
        </h2>

        <div style={{
          backgroundColor: '#518380',
          borderRadius: '0',
          padding: '20px',
          marginBottom: '30px'
        }}>
          <h3 style={{
            fontWeight: 800,
            fontSize: '20px',
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            Emergency near you
          </h3>

          {emergencyProviders.map((provider, index) => (
            <div key={index}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 0'
              }}>
                <span style={{
                  fontWeight: 800,
                  fontSize: '20px',
                  color: '#FFFFFF'
                }}>
                  {provider.name}
                </span>
                <span style={{
                  fontWeight: 800,
                  fontSize: '16px',
                  color: '#FFFFFF'
                }}>
                  {provider.distance}
                </span>
              </div>
              {index < emergencyProviders.length - 1 && <div className="divider" />}
            </div>
          ))}

          <p style={{
            fontWeight: 800,
            fontSize: '16px',
            color: '#FFFFFF',
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '20px'
          }}>
            note - click and book for emergency
          </p>

          <div style={{ textAlign: 'center' }}>
            <button 
              className="btn-secondary"
              onClick={handleBook}
              style={{
                width: '129px',
                height: '37px'
              }}
            >
              Book
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EmergencyBookingScreen
