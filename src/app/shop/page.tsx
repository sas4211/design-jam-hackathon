import Features from '@/Components/Shop/Features'
import FilterBar from '@/Components/Shop/FilterBar'
import Footer from '@/Components/Shop/Footer'
import Navbar from '@/Components/Shop/NavBar'
import Pagination from '@/Components/Shop/Pagination'
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
      <Pagination/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default page