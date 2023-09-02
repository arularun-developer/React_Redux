import React from 'react'
import { useNavigate } from 'react-router-dom'

function Productcard(props) { 
  const navigate = useNavigate();

  return (
    <div className='card m-2  cursor-pointer' role='button' onClick={() => navigate(`/product/${props.id}`)}>
        <div className=''>
            <img src={props.thumbnail}  height={200} width={280} alt={props.title} className='border_radius'/>
        </div>
        <div className='card-body'>
            <div className='card-title text-center mt-2'><strong>{props.title}</strong>
            <br></br>
            <strong className='text-center'>Price:${props.price}</strong>
            <br></br>
            <strong>Discount: {props.discountPercentage}%</strong>
            <br></br>
            <strong>Rating: {props.rating}</strong>
            <br></br>
              {
                props.stock > 0 ? <button className='btn btn-success mt-3' >More Details</button> : <button className='btn btn-danger'>Out of stock</button>
              }
            </div>

        </div>
      
    </div>
  )
}

export default Productcard
