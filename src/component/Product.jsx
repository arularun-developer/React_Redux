import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Productlist } from '../productlist/Productlist'
import { useDispatch } from 'react-redux';
import { addItem } from '../REDUX/reducer/Cart';


function Product() {
    const navigate =useNavigate();

  const dispatch = useDispatch();
    const params = useParams();
    const props = Productlist.find((element) => element.id === parseInt(params.id))

 const addtocart = () =>{
        dispatch(addItem(props))
        navigate('/cart')
 }

    return (
        <div className='text-center '>
            <div className=' m-2'>
                <div >
                    <img src={props.thumbnail} height={350} width={400} alt={props.title} className='border_radius1' />
                </div>
                <div className=' mt-3 card-body'>
                    <div className='card-title text-center mt-2'>
                        <strong className='fw-bolder fs-2'>Title:{props.title}</strong>
                        <br></br>
                        <strong className='text-center fw-bolder fs-2'>Price:${props.price}</strong>
                        <br></br>
                        <strong className='fw-bolder fs-2'>Discount: {props.discountPercentage}%</strong>
                        <br></br>
                        <strong className='fw-bolder fs-2'>Rating: {props.rating}</strong>
                        <br></br>
                        <div className='mt-3'>
                            {
                                props.stock > 0 ?
                                    <>
                                        <button className='btn btn-primary mt-3 ms-3' onClick={addtocart} > ADD TO CART</button>
                                    </>


                                    : <button className='btn btn-danger'>Out of stock</button>
                            }
                        </div>

                    </div>

                </div>

            </div>
            <hr></hr>
        </div>
    )
}

export default Product
