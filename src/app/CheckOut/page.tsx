import BillingInfo from '@/Components/CheckOut/BillingInfo'
import CheckOutFeatureSection from '@/Components/CheckOut/CheckOutFeatureSection'
import CheckOutFooter from '@/Components/CheckOut/CheckOutFooter'
import CheckOutHeader from '@/Components/CheckOut/CheckOutHeader'
import CheckOutNavBar from '@/Components/CheckOut/CheckOutNavBar'
import React from 'react'

const page = () => {
  return (
    <div>
     <CheckOutNavBar/>
     <CheckOutHeader/>  
     <BillingInfo/>
     <CheckOutFeatureSection/>
     <CheckOutFooter/> 
    </div>
  )
}

export default page