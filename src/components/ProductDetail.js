import { doc, getDoc,getFirestore } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Cart } from "../assets/aamisicons/Icons"

const ProductDetail=()=>{
    const [productDetail,setProductDetail]=useState()
   const {detail}=useParams()
 

useEffect(()=>{
    const db=getFirestore()
    const docs=doc(db,'bicicleteria',detail);
  getDoc(docs).then(res=>setProductDetail(res.data()))
    
},[])



return(

!productDetail?(<div className="position-relative">
    <div className="position-absolute top-50 start-0 translate-middle-y">cargando..</div>
    </div>):
(
    <div>
    <p>{productDetail.title}</p>
    <img src={productDetail.img} />
    <p>${productDetail.price}</p>
    <Cart/>

 </div>
)
)

 



  
}
export default ProductDetail