import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
     const Navgiate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container">
                <a className="navbar-brand  fs-2" href="#"id='colortext'>REDUX SHOP</a>
                <div className="float-end">
                    <button className="btn btn-warning mx-3" aria-current="page" href="#" onClick={()=>Navgiate('/')}>HOME</button>
                    <button className="btn btn-dark " href="#" onClick={() => Navgiate('/cart')}>CART</button>
                </div>
            </div>
        </nav>
    )
}

export default Header
