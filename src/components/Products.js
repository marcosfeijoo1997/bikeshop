import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard'

const Products=()=>{
  const [data,setData]=useState([])
  useEffect(()=>{
const db=getFirestore()
const queryCollection=collection(db,'bicicleteria');

getDocs(queryCollection)
.then((res)=>{
const arrProducts=res.docs.map(product=>({id:product.id,...product.data()}));
setData(arrProducts)},

  )

  },[])


return (<div>
  <ProductCard info={data}/>

</div>)
}






export default Products 