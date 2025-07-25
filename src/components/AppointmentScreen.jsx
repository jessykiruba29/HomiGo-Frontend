import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const AppointmentScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const service = location.state?.service

  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    address: '',
    reason: ''
  })

  const handleInputChange = (field, value) => {
    setAppointmentData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleConfirm = () => {
    if (!appointmentData.date || !appointmentData.time || !appointmentData.address || !appointmentData.reason) {
      alert("Please fill all fields before continuing.")
      return
    }
    navigate('/payment', { state: { service, appointmentData } })
  }

  const options = [
    { label: 'Emergency', path: '/emergency-booking' },
    
  ]

  return (
    <main className="screen" style={{ padding: '20px', backgroundColor: '#1D3233', minHeight: '100vh', color: '#fff' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <img
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/uhi.png"
          alt="Logo"
          style={{ height: '60px' }}
        />
        <img
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/three%20orange.png"
          alt="Profile"
          onClick={() => navigate('/profile')}
          style={{
              width: '60px',
              height: '60px',
              objectFit: 'cover',
              marginTop: '16px'
            }}
        />
      </header>

      {/* Navigation Options */}
      <div style={{ marginBottom: '30px' }}>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => navigate(option.path)}
            style={{
              width: '90%',
              height: '70px',
              backgroundColor: '#518380',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '10px auto',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontWeight: 800, fontSize: '18px', color: '#FFFFFF' }}>
              {option.label}
            </span>
          </div>
        ))}
      </div>

      {/* Appointment Form */}
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Appointment Details</h2>

      <div style={{ backgroundColor: '#518380', borderRadius: '15px', padding: '20px', color: '#000' }}>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label className="form-label">Date</label><br />
          <input
            type="date"
            value={appointmentData.date}
            onChange={e => handleInputChange('date', e.target.value)}
            style={inputStyle}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label className="form-label">Time</label><br />
          <input
            type="time"
            value={appointmentData.time}
            onChange={e => handleInputChange('time', e.target.value)}
            style={inputStyle}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label className="form-label">Address</label><br />
          <input
            type="text"
            placeholder="Enter your address"
            value={appointmentData.address}
            onChange={e => handleInputChange('address', e.target.value)}
            style={inputStyle}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label className="form-label">Reason</label><br />
          <textarea
            placeholder="Enter the reason for appointment"
            value={appointmentData.reason}
            onChange={e => handleInputChange('reason', e.target.value)}
            style={{ ...inputStyle, height: '80px' }}
          />
        </div>
      </div>

      {/* Confirm Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={handleConfirm}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1D3233',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Confirm
        </button>
      </div>
    </main>
  )
}

// Input field styling
const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
  marginTop: '5px'
}

export default AppointmentScreen
