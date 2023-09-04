import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Productitem from './Productitem'
import { addItem, modifyItem, removeItem } from '../REDUX/reducer/Cart';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function Cart() {
    const navigate = useNavigate();
     const list = useSelector((state) => state.cart.list)
    
    const dispatch = useDispatch();
    const incrementitem = (item) => {
        if(item.count > 0){
        dispatch(modifyItem({ ...item, count: item.count + 1 }))
        
        }
    
    }
   
    

    const decrementitem = (item) => {
        if (item.count === 1) {
            dispatch(removeItem(item))
        } else {
            dispatch(modifyItem({ ...item, count: item.count - 1 }))

        }
    }
    const removeitemfromcart = (item) => {
        dispatch(removeItem(item))
    // }
    
   
   
    }
    return (
        <div>
            {
           list.length > 0 ? list.map((item) => (
                    <Productitem {...item} key={item.id}
                    incrementitem={() => incrementitem(item)}
                    decrementitem={() => decrementitem(item)}
                    removeitem={() => removeitemfromcart(item)}

                />
                 )):<>
                   <div className='d-flex justify-content-center mt-5'>
                   <img src='https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?w=826&t=st=1693673310~exp=1693673910~hmac=2781a37a0e9aea8551f5043b82f02309a06b729ff0bc99dcbd53c4acd2544567' width={350} className=''/>
                 </div>
                 <div className='d-flex justify-content-center'>
                 <button className='btn btn-danger' onClick={ () =>navigate('/')}>GO TO HOME</button>

                 </div>
                 </>
               
            }
        </div>
    )
}

export default Cart
