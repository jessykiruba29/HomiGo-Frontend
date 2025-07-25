import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CallScreen = () => {
  const navigate = useNavigate()
  const [isOngoing, setIsOngoing] = useState(false)
  const [callEnded, setCallEnded] = useState(false)

  const handleCall = () => {
    setIsOngoing(true)
    setCallEnded(false)
  }

  const handleEndCall = () => {
    setIsOngoing(false)
    setCallEnded(true)
    setTimeout(() => navigate('/home'), 1500) // show 'Call End' for 1.5s before navigating
  }

  return (
    <main style={styles.screen}>
      <header style={styles.header}>
        <img 
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/uhi.png" 
          alt="Logo"
          style={styles.logo}
        />
        <img 
          src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/three%20orange.png" 
          alt="Profile"
          style={styles.profile}
          onClick={() => navigate('/profile')}
        />
      </header>

      <section style={styles.callInterface}>
        <div style={styles.avatarWrapper}>
          <img 
            src="https://uploads.onecompiler.io/42sryw8q2/42sryuhsc/output-onlinepngtools_(8)%5B1%5D.png" 
            alt="Contact"
            style={styles.avatar}
          />
        </div>

        <div style={styles.controls}>
          <button style={styles.callBtn} onClick={handleCall}>
            📞
          </button>

          {isOngoing && (
            <div style={styles.statusBox}>
              <span style={styles.statusText}>On Going</span>
            </div>
          )}

          <button style={{ ...styles.callBtn, backgroundColor: '#E74C3C' }} onClick={handleEndCall}>
            ❌
          </button>

          {callEnded && (
            <div style={styles.statusBox}>
              <span style={styles.statusText}>Call End</span>
            </div>
          )}
        </div>

        <div style={styles.callTag}>
          <span style={styles.callText}>Call</span>
        </div>
      </section>
    </main>
  )
}

const styles = {
  screen: {
    minHeight: '100vh',
    display: 'flex',
    width:'50vh',
    flexDirection: 'column',
    backgroundColor: '#1D3233',
    padding: '10px',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    height: '50px'
  },
  profile: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer'
  },
  callInterface: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarWrapper: {
    width: '55vw',
    height: '55vw',
    maxWidth: '250px',
    maxHeight: '250px',
    backgroundColor: '#518380',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px'
  },
  avatar: {
    width: '70%',
    height: '70%',
    objectFit: 'contain'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    marginBottom: '25px'
  },
  callBtn: {
    width: '70px',
    height: '70px',
    fontSize: '30px',
    backgroundColor: '#27AE60',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusBox: {
    backgroundColor: '#518380',
    padding: '10px 16px',
    borderRadius: '12px'
  },
  statusText: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  callTag: {
    marginTop: '20px',
    backgroundColor: '#518380',
    borderRadius: '12px',
    padding: '12px 24px'
  },
  callText: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold'
  }
}

export default CallScreen
