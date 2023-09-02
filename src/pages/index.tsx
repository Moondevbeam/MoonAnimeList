import Banner from '@/components/homepage/Banner'
import Footer from '@/components/homepage/Footer'
import Header from '@/components/homepage/Header'
import SearchBar from '@/components/homepage/Searchbar'
import React from 'react'

function index() {
  return (
    <div>
      <Header/>
      <Banner/>
      <SearchBar/>
      <Footer/>
    </div>
  )
}

export default index