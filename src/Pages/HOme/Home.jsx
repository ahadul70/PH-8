import React from 'react'
import Banner from '../../Components/Banner/Banner'
import { Stats } from '../../Components/Banner/Stats'
import { Trending } from '../../Components/Trending/Trending'

export default function Home() {
  return (
    <> <Banner />
      <Stats />
      <Trending/>
    </>
   
  )
}
