import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null)
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [Cartitems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(Cartitems);
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in Cartitems)
        {
            if(Cartitems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * Cartitems[item];
            }
        }
            return totalAmount;
        }
        const getTotalCartItems = () => {
            let totalitem = 0;
            for(const item in Cartitems)
            {
                if(Cartitems[item]>0)
                {
                    totalitem+= Cartitems[item];
                }
            }
            return totalitem;
        }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,Cartitems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;