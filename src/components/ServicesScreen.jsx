import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServicesScreen = () => {
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      name: 'Plumber',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/1wb6JWZf3b.png'
    },
    {
      id: 2,
      name: 'Electrician',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/51aAvNBrGO.png'
    },
    {
      id: 3,
      name: 'Pest infection',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/5siYLnTBtq.png'
    },
    {
      id: 4,
      name: 'Tank cleaner',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/TJrGM2ryMy.png'
    },
    {
      id: 5,
      name: 'Gas service',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/jy5hbJKjUU.png'
    },
    {
      id: 6,
      name: 'Gardener',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/ko50SCwEke.png'
    },
    {
      id: 7,
      name: 'Carpenter',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/CeeYEJHky0.png'
    },
    {
      id: 8,
      name: 'Packers & Movers',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/D21rnNKMRP.png'
    },
    {
      id: 9,
      name: 'Security service',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/PpGzAfwDSk.png'
    },
    {
      id: 10,
      name: 'AC service',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/zp1PQda5cx.png'
    }
  ]

  const handleServiceClick = (service) => {
    navigate('/appointment', { state: { service } })
  }

  return (
    <main className="screen">
      <header className="header">
        <img 
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/uhi.png" 
          alt="Logo"
          className="logo"
          style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              marginBottom: '10px'
            }}
          
        />
        <img 
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/three%20orange.png" 
          alt="Profile"
          height="180px"
          width="100px"
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
        <div className="service-grid">
          {services.map((service) => (
            <article 
              key={service.id}
              className="service-item"
              onClick={() => handleServiceClick(service)}
            >
              <img 
                src={service.icon} 
                alt={service.name}
                className="service-icon"
              />
              <h3 className="service-name">{service.name}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ServicesScreen
