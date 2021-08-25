import React, {useEffect, useState} from 'react';
import ItemCard from "./shopComponents/ItemCard";
import './viewsStyles/Shop.css'

function Shop({items}) {

    useEffect(()=>{
        console.log('shop' )
    },[])

    useEffect(() => {
        console.log(Array.isArray(items));
    }, [items]);

    const [cartShop, setCartShop] = useState([]);

    //region SHOP CART

    //Memory usage
    let cartIndex;
    let cartItem;
    let tempState;
    function handleCart(id) {

        //Create temp state and take the item we want to modify
        tempState = cartShop;
        cartIndex = tempState.findIndex(item => item.id === id);

        //If item exists we modify it
        if (cartIndex !== -1) {
            cartItem = tempState[cartIndex];

            console.log('cartItem ',cartItem);

            cartItem = {
                ...cartItem,
                count: cartItem.count += 1
            }

            tempState[cartIndex] = cartItem

            setCartShop(tempState);

            //If item doesn't exist, we create it.
        }else {
            setCartShop([...cartShop, {id, count: 1}])
        }

    }

    //endregion SHOP CART

    useEffect(()=>{
        console.log(cartShop);
    },[cartShop])


    return (
        <div className="shop-view">
            <div className={'items-container'}>
                {items.map((item) => {
                    return <ItemCard key={item.id} item={item} handleCart={handleCart}/>
                })}

            </div>
        </div>
    );
}

export default Shop;