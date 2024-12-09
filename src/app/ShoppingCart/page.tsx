import CartPage from '@/Components/ShoppingCart/CartPage'
import ShoppingCartFeatureSection from '@/Components/ShoppingCart/ShoppingCartFeatureSection'
import ShoppingCartFooter from '@/Components/ShoppingCart/ShoppingCartFooter'
import ShoppingHeader from '@/Components/ShoppingCart/ShoppingHeader'
import ShoppingNavBar from '@/Components/ShoppingCart/ShoppingNavBar'
import React from 'react'

const page = () => {
  return (
    <div>
        <ShoppingNavBar/>
        <ShoppingHeader/>
        <CartPage/>
        <ShoppingCartFeatureSection/>
        <ShoppingCartFooter/>
    </div>
  )
}

export default page