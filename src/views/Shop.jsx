import React, {useEffect, useState} from 'react';
import ItemCard from "./shopComponents/ItemCard";
import './viewsStyles/Shop.css'
import TableComponent from "../GlobalComponents/TableComponent";

function Shop({items}) {


    //region SHOP CART


    const [cartShop, setCartShop] = useState([]);
    const [cartSelectedItem, setCartSelectedItem] = useState(null);

    //Chose Item
    function handleAddCart(id, name, price, image) {

        setCartSelectedItem({
            id: id,
            name: name,
            price: price,
            count: 1
        })

    }

    //Add item to cart

    useEffect(() => {

        if (cartSelectedItem) {

            const selectedID = cartSelectedItem.id;

            console.log('selectedID ', selectedID);


            const existsItem = cartShop.findIndex(element => element.id === selectedID)

            console.log('existsItem ', existsItem);

            //IF ITEM DOESNT EXIST
            if (existsItem === -1) {
                console.log('Added item')
                setCartShop([...cartShop, cartSelectedItem])

            } else {

                //ITEM ALREADY EXISTS
                const tempState = cartShop;
                const currentCount = cartShop[selectedID]?.count +1;
                let currentElement = cartShop[selectedID];
                currentElement.count = currentCount;

                // console.log('currentElement  ', currentElement)

                tempState[selectedID] = currentElement;

                // console.log('tempState  ', tempState)

                setCartShop(tempState);


            }


        }
        console.log('cartSelectedItem ', cartSelectedItem)

    }, [cartSelectedItem])


    useEffect(() => {
        console.log('cartShop ', cartShop);
    }, [cartShop])

    //endregion SHOP CART


    //region TABLE GENERATION


    //endregion TABLE GENERATION

    return (
        <div className="shop-view">
            <div className="buy-details">
                <TableComponent infoToDisplay={cartShop}/>
            </div>
            <div className={'items-container'}>
                {items.map((item) => {
                    return <ItemCard key={item.id} item={item} handleCart={handleAddCart}/>
                })}

            </div>
        </div>
    );
}

export default Shop;