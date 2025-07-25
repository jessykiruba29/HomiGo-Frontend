import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotificationScreen = () => {
  const navigate = useNavigate()

  const notifications = [
    {
      id: 1,
      title: 'Plumber',
      icon: 'https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/output-onlinepngtools_(8)%5B1%5D.png'
    },
    {
      id: 2,
      title: 'Police',
      icon: 'https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/output-onlinepngtools_(8)%5B1%5D.png'
    },
    {
      id: 3,
      title: 'Gas Service',
      icon: 'https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/output-onlinepngtools_(8)%5B1%5D.png'
    },
    {
      id: 4,
      title: 'Tank cleaner',
      icon: 'https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/output-onlinepngtools_(8)%5B1%5D.png'
    }
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
          Notification
        </h2>

        <div className="divider" />

        {notifications.map((notification, index) => (
          <div key={notification.id}>
            <div className="notification-item">
              <div className="notification-icon">
                <img 
                  src={notification.icon} 
                  alt={notification.title}
                  style={{ width: '95px', height: '95px', objectFit: 'cover' }}
                />
              </div>
              <div className="notification-content">
                <h3 className="notification-title">{notification.title}</h3>
              </div>
            </div>
            {index < notifications.length - 1 && <div className="divider" />}
          </div>
        ))}
      </section>
    </main>
  )
}

export default NotificationScreen
