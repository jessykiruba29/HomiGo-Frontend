import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmergencyScreen = () => {
  const navigate = useNavigate()

  const emergencyServices = [
    {
      id: 1,
      name: 'Universal Helpline',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/J0Wa4mBqpY.png'
    },
    {
      id: 2,
      name: 'Police',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/9TrWpfLSTs.png'
    },
    {
      id: 3,
      name: 'Women Helpline',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/VaYzcdk6ea.png'
    },
    {
      id: 4,
      name: 'Child Helpline',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/Atb4hjobHS.png'
    },
    {
      id: 5,
      name: 'Blood bank info',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/D8jV4bnCMs.png'
    },
    {
      id: 6,
      name: 'Fire service',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/JZxpjSyezi.png'
    },
    {
      id: 7,
      name: 'Ambulance',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/42GfcCfv9h.png'
    },
    {
      id: 8,
      name: 'Cyber crime',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/P0GNud3HdE.png'
    }
  ]

  const handleEmergencyClick = (service) => {
    navigate('/call', { state: { service } })
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

      <section style={{ padding: '20px', height: 'calc(100% - 93px)', overflowY: 'auto' }}>
        <div className="emergency-grid">
          {emergencyServices.map((service) => (
            <article 
              key={service.id}
              className="emergency-item"
              onClick={() => handleEmergencyClick(service)}
            >
              <img 
                src={service.icon} 
                alt={service.name}
                className="emergency-icon"
              />
              <h3 className="emergency-name">{service.name}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default EmergencyScreen
