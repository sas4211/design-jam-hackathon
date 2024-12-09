
import AuthForm from '@/Components/MyAccount/Authform'
import MyFeatureSection from '@/Components/MyAccount/MyFeatureSection'
import MyFooter from '@/Components/MyAccount/MyFooter'
import MyHeader from '@/Components/MyAccount/MyHeader'
import MyNavBar from '@/Components/MyAccount/MyNavBar'
import React from 'react'

const page = () => {
  return (
    <div>
        <MyNavBar/>
        <MyHeader/>
        <AuthForm/>
        <MyFeatureSection/>
        <MyFooter/>
    </div>
  )
}

export default page