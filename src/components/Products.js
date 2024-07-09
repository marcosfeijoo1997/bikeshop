import { getFirestore, collection, getDocs,query, where } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom';

const Products=()=>{
  const [data,setData]=useState([])
  const {category}=useParams()
  useEffect(()=>{
const db=getFirestore()
const queryCollection=collection(db,'bicicleteria');

if(!category){
   
getDocs(queryCollection)
.then((res)=>{
const arrProducts=res.docs.map(product=>({id:product.id,...product.data()}));
setData(arrProducts)}

  )}
  if(category){
   
   const filter=query(queryCollection,where('category','==',category))
  getDocs(filter).then ((res)=>{
    const arrProducts=res.docs.map(elem=>({
    id:elem.id,
   ...elem.data(),


  }))
  setData(arrProducts)

}
  
  
  )



  }


  

}
  
  ,[category])


return (<div>
  <ProductCard info={data} category={category}/>

</div>)
}






export default Products 