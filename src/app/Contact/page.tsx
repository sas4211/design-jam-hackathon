import ContactFeatureSection from '@/Components/Contact/ContactFeatureSection'
import ContactFooter from '@/Components/Contact/ContactFooter'
import ContactHeader from '@/Components/Contact/ContactHeader'
import ContactNavBar from '@/Components/Contact/ContactNavBar'
import ContactPage from '@/Components/Contact/ContactPage'
import React from 'react'

const page = () => {
  return (
    <div>
        <ContactNavBar/>
        <ContactHeader/>
        <ContactPage/>
        <ContactFeatureSection/>
        <ContactFooter/>
    </div>
  )
}

export default page