import React, {useContext} from "react";
import './Cartitems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'

const Cartitems = () => {
    const {getTotalCartAmount,all_product,Cartitems,removeFromCart} = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p className="products">Products</p>
                <p className="title">Title</p>
                <p className="price">Price</p>
                <p className="quantity">Quantity</p>
                <p className="alltotal">Total</p>
                <p className="remove">Remove</p>
            </div>
        <hr />
        {all_product.map((e)=>{
                if(Cartitems[e.id]>0)
                    {
                    return <div>
                            <div className="cartitems-format cartitems-format-main">
                            <img src= {e.image} alt="" className="carticon-product-icon" />
                           <p className="name">{e.name}</p>
                           <p className="newprice">${e.new_price}</p>
                           <button className="cartitems-quantity">{Cartitems[e.id]}</button>
                           <p className="total">${e.new_price*Cartitems[e.id]}</p>
                           <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}}  alt="" />
                        </div>
                        <hr />
                        </div>
                    }
                    return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                       <input type="text" placeholder="promo code" />
                       <button>Submit</button> 
                    </div>
                </div>
                </div>
                </div>
           
    )
}

export default Cartitems;