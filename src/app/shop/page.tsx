import FilterBar from '@/Components/Shop/FilterBar'
import Navbar from '@/Components/Shop/NavBar'
import ProductGrid from '@/Components/Shop/ProductGrid'
import ShopHeader from '@/Components/Shop/ShopHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <ShopHeader/>
      <FilterBar/>
      <ProductGrid/>
    </div>
  )
}

export default page