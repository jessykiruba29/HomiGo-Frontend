import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SplashScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login')
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <main
      className="screen"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor:'#1D3233',
        padding: '20px',

      }}
    >
      <section
        className="splash-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '90%',
        }}
      >
        <img
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/uhi.png"
          alt="HomiGo Logo"
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            marginBottom: '30px',
          }}
        />

        <h1
          style={{
            fontWeight: 800,
            fontSize: '36px',
            color: '#FF8C00',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          HomiGo
        </h1>

        <div
          style={{
            fontWeight: 500,
            fontSize: '24px',
            color: '#FF8B00',
            textAlign: 'center',
            letterSpacing: '4px',
          }}
        >
          &gt;&gt;&gt;&gt;&gt;
        </div>
      </section>
    </main>
  )
}

export default SplashScreen
