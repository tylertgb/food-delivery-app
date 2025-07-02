import React, { useState } from 'react'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/explore.menu/ExploreMenu'

const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home