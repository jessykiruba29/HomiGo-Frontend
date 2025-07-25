import React from 'react'
import { useNavigate } from 'react-router-dom'

const LocationScreen = () => {
  const navigate = useNavigate()

  const locationOptions = [
    'By map',
    'Type manually',
    'Search near by'
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
          fontSize: '20px',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          Location
        </h2>

        <div style={{ marginBottom: '30px' }}>
          <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/p6uOUHEpmv.png" 
            alt="Map"
            style={{
              width: '373px',
              height: '279px',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
        </div>

        {locationOptions.map((option, index) => (
          <div key={index}>
            <div style={{
              padding: '15px 0',
              fontSize: '20px',
              fontWeight: 800,
              color: '#FFFFFF'
            }}>
              {option}
            </div>
            {index < locationOptions.length - 1 && <div className="divider" />}
          </div>
        ))}

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button 
            className="btn-secondary"
            onClick={() => navigate('/home')}
            style={{
              width: '177px',
              height: '45px'
            }}
          >
            Update
          </button>
        </div>
      </section>
    </main>
  )
}

export default LocationScreen
