import BlogFeatureSection from '@/Components/Blog/BlogFeatureSection'
import BlogFooter from '@/Components/Blog/BlogFooter'
import BlogHeader from '@/Components/Blog/BlogHeader'
import BlogNavBar from '@/Components/Blog/BlogNavBar'
import BlogPage from '@/Components/Blog/BlogPage'
import React from 'react'

const page = () => {
  return (
    <div>
        <BlogNavBar />
        <BlogHeader/>
        <BlogPage/>
        <BlogFeatureSection/>
        <BlogFooter/>
    </div>
  )
}

export default page