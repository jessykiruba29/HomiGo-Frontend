import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
  e.preventDefault()

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND}/userlogin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    if (response.ok) {
      
      navigate('/home')
    } else {
      alert(data.message || 'Login failed')
    }
  } catch (error) {
    console.error('Login error:', error)
    alert('Something went wrong. Please try again.')
  }
}


  return (
    <main
      className="screen"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1D3233',
        padding: '20px'
      }}
    >
      <section
        className="login-content"
        style={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#1D3233',
          padding: '40px 30px',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          color: '#FFFFFF'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img
            src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/uhi.png"
            alt="HomiGo Logo"
            style={{
              width: '180px',
              height: '180px',
              objectFit: 'cover',
              marginBottom: '10px'
            }}
          />
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label className="form-label" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
              Email
            </label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #ccc'
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label className="form-label" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
              Password
            </label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #ccc'
              }}
            />
          </div>

          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <a
              href="#"
              style={{
                color: '#FF8B00',
                fontSize: '14px',
                textDecoration: 'underline'
              }}
            >
              Forgot Password?
            </a>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <button
              type="submit"
              className="btn-primary"
              style={{
                backgroundColor: '#FF8B00',
                color: '#fff',
                width: '100%',
                padding: '14px 0',
                fontSize: '20px',
                fontWeight: 700,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '16px', fontWeight: 500 }}>
              Don't have an account?{' '}
              <span
                onClick={() => navigate('/signup')}
                style={{
                  color: '#FF8B00',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontWeight: 'bold'
                }}
              >
                Signup
              </span>
            </p>
          </div>
        </form>
      </section>
    </main>
  )
}

export default LoginScreen
