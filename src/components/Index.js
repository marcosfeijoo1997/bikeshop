



import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'


import imagen1 from '../assets/santander.png'
import imagen2 from '../assets/HSBC.png'
import imagen3 from '../assets/banco ciudad.png'

const Index=()=>{
    return (
      <div>     
        <div className='carrousel'>
        <Carousel   data-bs-theme="dark">
          <Carousel.Item>
          <img
    
          className="d-block"
          src="https://http2.mlstatic.com/D_NQ_NP_697841-MLA72062163014_102023-O.webp"
          alt="First slide"
        />            <Carousel.Caption>
            
          
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
          className="d-block"
          src="https://canaglia.com/wp-content/uploads/2020/12/Zenith-Calea-ELT-Home-1.jpg"
          alt="First slide"
        />   
            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
          className="d-block"
          src="https://http2.mlstatic.com/D_NQ_NP_693709-MLA48699394712_122021-O.webp"
          alt="First slide"
        />   
            <Carousel.Caption>
          
       
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>

        <div className='banks'>
          <li>
            <img src={imagen1} alt='img1'/>
          </li>
          <li>
            <img src={imagen2}  alt='img2'/>
            </li>
          <li>
            <img src={imagen3}  alt='img3'/>
            </li>


     
        </div>

        </div>
      );
}
export default Index