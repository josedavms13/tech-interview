import React, {useEffect} from 'react';
import '../viewsStyles/Shop.css'

function ItemCard({item, key , handleCart}) {
    useEffect(()=>{
    },[])

    return (
        <div className={'item-card'}>


            <h5>{item.item.title}</h5>
            <img src={item.item.picture} alt={item.item.title}/>
            <p>{item.item.description}</p>
            <h6>$ {item.item.price}</h6>

            <h6>{item.item.stock} in stock</h6>

            <button onClick={()=>handleCart(item.item.id)}>Add to Cart</button>


        </div>
    );
}

export default ItemCard;