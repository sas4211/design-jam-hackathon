"use client"
import CartAsgardArtPage from '@/Components/CartSliderBar/CartAsgardArtPage'
import { CartProvider } from '@/Components/CartSliderBar/CartContext'
import CartFooter from '@/Components/CartSliderBar/CartFooter'
import CartHeaderWithSlider from '@/Components/CartSliderBar/CartHeaderWithSlider'
import CartProductDetails from '@/Components/CartSliderBar/CartProductDetails'

import CartProductPage from '@/Components/CartSliderBar/CartProductPage'
import CartRelatedProducts from '@/Components/CartSliderBar/CartRelatedProducts'
import React from 'react'

const page = () => {
  return (
    <CartProvider>
      <CartHeaderWithSlider/>
        <CartAsgardArtPage/>
        <CartProductPage/>
        <CartProductDetails/>
        <CartRelatedProducts/>
        <CartFooter/>
        </CartProvider>
    
  )
}

export default page