import React from 'react'


function Productitem(props) {



    return (
        <>
    
            <div className='container'>
                <div className='mt-2 text-center'>
                    <img src={props.thumbnail} height={200} width={280} alt={props.title} className='border_radius' />
                </div>

                <div className='card-title text-center mt-2'>
                    <strong className='me-3'>{props.title}</strong>
                    <br/>
                    <strong className='text-center me-3'>Price:${props.price}</strong>
                    <br/>
                    <strong className='me-3'>Discount: {props.discountPercentage}%</strong>
                    <br/>
                    <strong className='me-3'>Rating: {props.rating}</strong>
                </div>
                <div className='text-center'>
                
               
                <button className='btn btn-success me-2' onClick={props.incrementitem}>+</button>{props.count}
                <button className='btn btn-success ms-2' onClick={props.decrementitem}>-</button>
                <br/>
                <button className='btn btn-danger ms-1 mt-1'onClick={props.removeitem}>REMOVE</button>
                <br></br>

                <strong>Total Amount:{props.price}</strong>
                </div>
                
                <hr></hr>





            </div>
        </>

    )
}

export default Productitem
