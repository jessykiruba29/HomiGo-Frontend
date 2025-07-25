import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentScreen = () => {
  const navigate = useNavigate()
  const [selectedPayment, setSelectedPayment] = useState('')

  const paymentOptions = [
    'Pay by any UPI app',
    'Credit / Debit Cards',
    'EMI',
    'Net Banking',
    'Cash',
    'Mobile Wallets',
    'Gift Cards/ Promo Codes'
  ]

  const handleContinue = () => {
    navigate('/confirmation')
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
          fontWeight: 400,
          fontSize: '20px',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          Payment Details
        </h2>

        <div style={{
          backgroundColor: '#518380',
          borderRadius: '15px',
          padding: '20px'
        }}>
          <h3 style={{
            fontWeight: 400,
            fontSize: '20px',
            color: '#FFFFFF',
            marginBottom: '20px'
          }}>
            How would you like to pay?
          </h3>

          <div className="divider" />

          {paymentOptions.map((option, index) => (
            <div key={index}>
              <div className="payment-option">
                <div 
                  className="payment-radio"
                  onClick={() => setSelectedPayment(option)}
                  style={{
                    backgroundColor: selectedPayment === option ? '#FF8B00' : '#D9D9D9'
                  }}
                />
                <span className="payment-label">{option}</span>
              </div>
              {index < paymentOptions.length - 1 && <div className="divider" />}
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button 
              className="btn-secondary"
              onClick={handleContinue}
              style={{
                width: '123px',
                height: '34px'
              }}
            >
              continue
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PaymentScreen
