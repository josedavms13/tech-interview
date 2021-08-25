import React, {useEffect} from 'react';

function Shop(items) {

    useEffect(()=>{
        console.log('shop' )
    },[])

    useEffect(() => {
        console.log(items);
    }, [items]);


    return (
        <div>

        </div>
    );
}

export default Shop;