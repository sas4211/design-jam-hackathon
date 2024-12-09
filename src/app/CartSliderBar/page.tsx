"use client"
import CartAsgardArtPage from '@/Components/CartSliderBar/CartAsgardArtPage'
import CartBreadcrumb from '@/Components/CartSliderBar/CartBreadCrumb'
import { CartProvider } from '@/Components/CartSliderBar/CartContext'
import CartFooter from '@/Components/CartSliderBar/CartFooter'
import CartHeaderSlider from '@/Components/CartSliderBar/CartHeaderSlider'
import CartProductDetails from '@/Components/CartSliderBar/CartProductDetails'

import CartProductPage from '@/Components/CartSliderBar/CartProductPage'
import CartRelatedProducts from '@/Components/CartSliderBar/CartRelatedProducts'
import React from 'react'

const page = () => {
  return (
    <CartProvider>
      <CartHeaderSlider/>
       <CartBreadcrumb/>
        <CartAsgardArtPage/>
        <CartProductPage/>
        <CartProductDetails/>
        <CartRelatedProducts/>
        <CartFooter/>
        </CartProvider>
    
  )
}

export default page