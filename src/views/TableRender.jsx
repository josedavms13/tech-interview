import React, {useEffect} from 'react';
import aos from 'aos'
import 'aos/dist/aos.css'

function TableRender({toRender}) {

    useEffect(()=>{
        aos.init();
    },[])

    return (
        <div >
            {toRender.map((item)=>{
                return (
                    <div data-aos-delay={'50'} data-aos={'fade-up'} style={{'height' : '40vh', 'margin': "20px", "backgroundColor":"gray"}} key={item}>
                        {item}
                    </div>
                )
            })}

        </div>
    );
}

export default TableRender;