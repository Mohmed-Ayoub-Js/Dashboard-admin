import React from 'react'
import MiniDrawer from '../global/Drawer'
import AddProducts from './Add'

const Products = () => {
  return (
    <div>
        <MiniDrawer />
        <center>
            <h1>
                أَضافة منتج جديد
            </h1>
        </center>
        <AddProducts />
    </div>
  )
}

export default Products