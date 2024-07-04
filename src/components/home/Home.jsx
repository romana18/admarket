import React from 'react'
import Carousel from '../carousel/Carousel'
import Cards from '../cards/Cards'
import Categories from '../categories/Categories'
import SimpleSlider from '../carousel/SimpleSlider'
import CatMobile from '../categories/CatMobile'

const itemsPerPage =6
const currentPage =1

function Home() {

  return (
<>
<div className='overflow-x-hidden' >
  <div className='hidden sm:block mt-2'>
  <SimpleSlider/>
  
  </div>
 

<div className='sm:hidden mt-16'>
<Carousel/>
</div>


{/* <Cards/> */}
<Cards currentPage={currentPage} itemsPerPage={itemsPerPage} />
</div>


</>
  )
}

export default Home