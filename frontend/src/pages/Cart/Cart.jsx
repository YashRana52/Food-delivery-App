import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../contest/StoreContext';
import './Cart.css';

function Cart() {
    const { cartItem = {}, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext); 
    const navigate = useNavigate();


    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item) => {
                        if (cartItem[item._id] && cartItem[item._id] > 0) { // Use cartItem here
                            return (
                                <div key={item._id} className="cart-items-item">
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>₹{item.price}</p>
                                    <p>{cartItem[item._id]}</p>
                                    <p>₹{item.price * cartItem[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })
                }
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{getTotalCartAmount()===0?0:20}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount() + 20}</b>
                        </div>
                        <button className='promocode' onClick={()=>navigate('/order ')}>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, enter it here:</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='Promo Code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
