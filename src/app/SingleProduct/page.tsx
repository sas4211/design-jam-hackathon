import AsgardArtsPage from '@/Components/Singleproduct/AsgardArtsPage'
import Breadcrumb from '@/Components/Singleproduct/Breadcrumb'
import ProductDetails from '@/Components/Singleproduct/ProductDetails'
import ProductPage from '@/Components/Singleproduct/ProductPage'
import RelatedProducts from '@/Components/Singleproduct/RelatedProducts'
import SingleFooter from '@/Components/Singleproduct/SingleFooter'
import SingleHeader from '@/Components/Singleproduct/SingleHeader'
import React from 'react'

const page = () => {
  return (
    <div>
     <SingleHeader /> 
     <Breadcrumb/>
     <AsgardArtsPage/>
     <ProductPage/>
     <ProductDetails/>
     <RelatedProducts/>
     <SingleFooter/>
     
    </div>
  )
}

export default page