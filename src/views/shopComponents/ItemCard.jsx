import React, {useEffect} from 'react';
import '../viewsStyles/Shop.css'
import aos from 'aos'
import 'aos/dist/aos.css'

function ItemCard({item, handleCart}) {

    useEffect(()=>{
        aos.init();
    },[])
    return (
        <div data-aos-delay={'50'} data-aos={'fade-up'} className={'item-card'}>


            <div className="title-container">
                <h5>{item.item.item}</h5>
            </div>
            <div className="price-container">
                <h6>$ {item.item.price}</h6>
            </div>

            <div className="image-container">
                <img src={item.item.picture} alt={item.item.title}/>
            </div>
            <p>{item.item.description}</p>

            <h6>{item.item.stock} in stock</h6>

            <button onClick={()=>handleCart(item.item.id, item.item.item, item.item.price)}>Add to Cart</button>


        </div>
    );
}

export default ItemCard;