import React,{Fragment, useEffect} from 'react'
import Header from './Header'
import Product from './Product'
import "./Home.css"
import Footer from './Footer'
import {getProduct} from "./actions/productAction"
import {useSelector ,  useDispatch} from "react-redux"
import Loader from './layout/Loader/Loader'
import {useAlert} from "react-alert"
import {useNavigate} from "react-router-dom"
import { getCategoryProduct } from './actions/categoryAction'





function Home() {

  let navigate = useNavigate()
  const alert =  useAlert()
  const dispatch = useDispatch();
  const {loading,products, error}= useSelector((state)=>state.products);
  // const {categorys}= useSelector((state)=>state.categorys);
  

   const keyword=''
  // console.log(error)

  useEffect(() => {
    // console.log(error)
    if(error){
      return alert.error(error)
    }
    dispatch( getProduct(keyword));
   
  }, [dispatch,error, alert])
  
let handleonClick=(category)=>{
  // console.log(category)
  navigate(`/categorylist/${category}`, {state:{category}})
}
  return (
    <Fragment>
      {loading?<Loader/>:   <>
        <Header/>
        <div className='home'>
          <div className='category__bar'>
            <h2>Smarts Phones</h2>
            <button className='view-more-btn' onClick={()=>{handleonClick("smarts phones")}}>View more</button>
          </div>
          <div className='home__row'> 
            {products && products.map((product)=>(
              <Product product={product}/>
            ))}
          </div>
          <div className='category__bar'>
            <h2>Laptops</h2>
            <button className='view-more-btn'onClick={()=>{handleonClick("laptop")}}>View more</button>
          </div>
          <div className='home__row'> 
          {products && products.map((product)=>(
              <Product product={product}/>))}
   
          </div>
          <div className='category__bar'>
            <h2>others</h2>
            <button className='view-more-btn'onClick={()=>{handleonClick("other")}}>View more</button>
          </div>
          <div className='home__row'> 
          {products && products.map((product)=>(
              <Product product={product}/>))}
            </div>
        </div>
        <Footer/>
    </>}
    </Fragment>
  )
}

export default Home