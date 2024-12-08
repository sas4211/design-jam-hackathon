import BlogSection from '@/Components/Home/BlogSection';
import HeroSection from '@/Components/Home/HeroSection';
import InstagramSection from '@/Components/Home/InstagramSection';
import ProductSection from '@/Components/Home/ProductSection';
import TopPicksSection from '@/Components/Home/TopPicksSection';
import React from 'react'
import ProductShowcase from '@/Components/Home/ProductShowcase';
import FooterSection from '@/Components/Home/FooterSection';


const Page = () => {
  
    return (
      <div>

      <HeroSection/>
      <ProductSection/>
      <TopPicksSection/>
      <ProductShowcase/>
      <BlogSection/>
      <InstagramSection/>
      <FooterSection/>
      </div>
    
    );
};
  
  export default Page;