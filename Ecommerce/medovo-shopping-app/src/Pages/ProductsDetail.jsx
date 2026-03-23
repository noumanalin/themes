import React from 'react'
import ProductInfo from '../components/DisplayProducts/ProductInfo'
import ProductTabs from '../components/DisplayProducts/ProductTabs';
import RelatedProducts from '../components/DisplayProducts/RelatedProducts';

const ProductsDetail = () => {
  return (
    <>
          <ProductInfo />          
          <ProductTabs />
          <RelatedProducts/>
          
    </>
  )
}

export default ProductsDetail
