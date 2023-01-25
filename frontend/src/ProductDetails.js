import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom';
import "./ProductDetails.css"
import ImageSlider from 'react-simple-image-slider';
import ReactStars from 'react-rating-stars-component';
import ReviewCard from './ReviewCard';

const ProductDetails = () => {

    let location = useLocation()
    const product = location.state
    console.log(product.name)
    const options = {
        edit : false,
        color: "rgba(20 ,20, 20, 0.1)",
        activeColor:"yellow",
        size:window.innerWidth < 600? 20 : 25,
        value:product.ratings,
        isHalf:true,
    }
    function truncate(str, n){
        return str?.length>n?str.substr(0, n-1)+"...":str;
    }

  return (
    <Fragment>
        <div className='productDetails'>
            <div className='productDetails-carousel'>
                <ImageSlider className='imageSlider'
                    width={400}
                    height={300}
                    images={product.images}
                    showBullets={true}
                    showNavs={true}
                    style={{boxShadow:"2px 2px grey"}}
                ></ImageSlider>
            </div>

            <div className='producDetails-info'>
                <div className='detailsBlock-1'>
                    <h2>{truncate(product.name,150)}</h2>
                    <p>Product #{product._id}</p>
                </div>
                <div className='detailsBlock-2'>
                    <ReactStars {...options}/>
                    <span>({product.numOfReviews} Reviews)</span>
                </div>
                <div className='detailsBlock-3'>
                    <h1>{`₹${product.price}`}</h1>
                    <div className='detailsBlock-3-1'>
                        <div className='detailsBlock-3-1-1'>
                            <button>-</button>
                            <input value="1" type="number" />
                            <button>+</button>
                        </div>
                        <button>Add to cart</button>
                    </div>
                    <p>
                        Status:
                        <b className={product.Stock < 1 ? "redColor":"greenColor"}>
                            {product.Stock < 1 ? " OutOfStock": " InStock"}
                        </b>
                    </p>
                </div>
                <div className='detailsBlock-4'>
                    Description : <p>{product.description}</p>
                </div>

                <button className='submitReview'>Submit Review</button>

            </div>
        </div>
        <h3 className='reviewsHeading'>Reviews</h3>
        {product.reviews && product.reviews[0]?
        (<div className='reviews'>
            {product.reviews && product.reviews.map((review)=><ReviewCard review={review}/>)}
        </div>):(
            <p className='noReviews'> No Reviews Yet</p>
        )
        }
    </Fragment>
  )
}

export default ProductDetails
