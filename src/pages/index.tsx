import Banner from '@/components/homepage/Banner'
import Footer from '@/components/homepage/Footer'
import Header from '@/components/homepage/Header'
import SearchBar from '@/components/homepage/Searchbar'
import React from 'react'

function index() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
      <Header/>
      <Banner/>
      <SearchBar/>
      </div>
      <Footer/>
    </div>
  )
}

export default index