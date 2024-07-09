import './style.css'
import { NavLink } from 'react-router-dom'

const ProductCard =({info,category})=>{
console.log(category,'category')
    return (

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
     
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {info.map((product) => (
       
                <div key={product.id} className="group relative ">
           
                       <NavLink to={category?(`${product.id}`):`${product.category}/${product.id}`}>
                  <div className='group-hover:opacity-75 borderSolid'>
                    <img
                      src={product.img}
                      alt='img'
                      className="imgCard"
                    />
                             <div>
                     
                     <p className='text-center text-lg font-semibold'>  {product.title}</p> 
               
                
              
                  
                   <p className='text-center font-bold text-gray-400'>{product.brand}</p>
                 <p className="text-xl font-medium  text-center ">${product.price}</p>
            
       
            
                 </div>
                  </div>
                  </NavLink>
                  <div >
           
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       
      )
    }

export default ProductCard