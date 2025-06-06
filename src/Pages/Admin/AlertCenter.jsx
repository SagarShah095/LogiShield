import React from 'react'
import NavbarAlertCenter from '../../Components/Admin Components/AlertCenter/NavbarAlertCenter';
import BtnSection from './../../Components/Admin Components/AlertCenter/BtnSection';
import AlertHeader from './../../Components/Admin Components/AlertCenter/AlertHeader';

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