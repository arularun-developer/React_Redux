import React from 'react'
import { Productlist } from '../productlist/Productlist'
import Productcard from './Productcard'

function Dashboard() {
  return (
    <div className=' d-flex justify-content-center flex-wrap mt-5'>
      {
        Productlist.map((product) =>  <Productcard key={product.id} {...product} />)
      }
    </div>
  )
}

export default Dashboard
