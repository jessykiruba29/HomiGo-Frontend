import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchText)
  }

  return (
    <main
      className="screen"
      style={{
        minHeight: '90vh',
        backgroundColor: '#1D3233',
        color: '#1D3233',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      {/* CSS for placeholder */}
      <style>
        {`
          input::placeholder {
            color: #FFA500; /* orange */
            opacity: 1; /* for Firefox */
          }
        `}
      </style>

      {/* Header */}
      <header
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <img
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/uhi.png"
          alt="Logo"
          style={{
            width: '60px',
            height: '60px',
          }}
        />
        <img
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/three%20orange.png"
          alt="Profile"
          onClick={() => navigate('/profile')}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        />
      </header>

      {/* Main Actions */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          style={{
            background: '#518380',
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/npaycOAuU7.png"
            alt="Search"
            style={{
              width: '48px',
              height: '48px',
              flexShrink: 0,
            }}
          />
          <input
            type="text"
            placeholder="Search Services..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              flexGrow: 1,
              fontSize: '16px',
              padding: '8px 12px',
              borderRadius: '8px',
              border: 'none',
              outline: 'none',
              backgroundColor: '#518382',
              color: '#fff',
            }}
          />
        </form>

        {/* House Button */}
        <div
          onClick={() => navigate('/services')}
          style={{
            background: '#518382',
            borderRadius: '20px',
            padding: '16px',
            cursor: 'pointer',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 700,
            marginTop: '20%',
          }}
        >
          House
        </div>

        {/* Emergency Button */}
        <div
          onClick={() => navigate('/emergency')}
          style={{
            background: '#518382',
            borderRadius: '20px',
            padding: '16px',
            cursor: 'pointer',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 700,
            marginTop: '10%',
          }}
        >
          Emergency
        </div>
      </section>
    </main>
  )
}

export default HomeScreen
