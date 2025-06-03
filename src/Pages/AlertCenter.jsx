import React from 'react'
import NavbarAlertCenter from '../Components/AlertCenter/NavbarAlertCenter'
import BtnSection from '../Components/AlertCenter/BtnSection'
import AlertHeader from '../Components/AlertCenter/AlertHeader'

const AlertCenter = () => {
  return (
    <div>
        <NavbarAlertCenter />
        <BtnSection />
        <AlertHeader />
    </div>
  )
}

export default AlertCenter