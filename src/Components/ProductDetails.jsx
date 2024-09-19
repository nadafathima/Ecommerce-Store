import React,{useState,useEffect} from 'react'
import './productdetails.css'
import { getProductId } from '../ApiService/api'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {

    const {id}= useParams();

    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
    
        const fetchProductDetails= async () =>{
            const data = await getProductId(id)
            setProductDetails(data)
        }

        fetchProductDetails()

    }, [id])

    const handleBuyNow=()=>{
        window.confirm("The product is out of deliveri:)")
    }
    

  return (
    <>
      <div className="product-details-container">
        <img src={productDetails.image} alt="image" className='product-image'/>
        <div className="product-info">
            <h2 className='product-title'>{productDetails.title}</h2>
            <p className='product-description'>{productDetails.description} </p>
            <p className='product-price'>{productDetails.price} </p>
            <button className='buy-now-button' onClick={handleBuyNow}>Buy Now</button>
            <Link to={'/'}>
            <button className='goback'>Go Back Home</button>

            </Link>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
