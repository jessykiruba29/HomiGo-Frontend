import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SplashScreen from './components/SplashScreen'
import LoginScreen from './components/LoginScreen'
import SignupScreen from './components/SignupScreen'
import HomeScreen from './components/HomeScreen'
import ServicesScreen from './components/ServicesScreen'
import EmergencyScreen from './components/EmergencyScreen'
import ProfileScreen from './components/ProfileScreen'
import NotificationScreen from './components/NotificationScreen'
import BookingScreen from './components/BookingScreen'
import LocationScreen from './components/LocationScreen'
import AppointmentScreen from './components/AppointmentScreen'
import EmergencyBookingScreen from './components/EmergencyBookingScreen'
import PaymentScreen from './components/PaymentScreen'
import ConfirmationScreen from './components/ConfirmationScreen'
import CallScreen from './components/CallScreen'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/emergency" element={<EmergencyScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/notifications" element={<NotificationScreen />} />
        <Route path="/bookings" element={<BookingScreen />} />
        <Route path="/location" element={<LocationScreen />} />
        <Route path="/appointment" element={<AppointmentScreen />} />
        <Route path="/emergency-booking" element={<EmergencyBookingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/confirmation" element={<ConfirmationScreen />} />
        <Route path="/call" element={<CallScreen />} />
      </Routes>
    </div>
  )
}

export default App
