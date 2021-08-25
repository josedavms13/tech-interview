import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";

function TableComponent({infoToDisplay}) {

    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        console.log('infoToDisplay ', infoToDisplay);

        infoToDisplay.forEach(element => {
            setTotalPrice(totalPrice+ element.price)
        })

    }, [infoToDisplay]);

    useEffect(()=>{

        console.log(totalPrice);
    },[totalPrice])

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Unit Price</th>
                    <th>Total price</th>
                </tr>
                </thead>
                <tbody>

                {infoToDisplay.map((element) => {
                    return (
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.count}</td>
                            <td>$ {element.price}</td>
                            <td>$ {(element.price)* (element.count)}</td>
                        </tr>


                    )
                })}
                <tr>
                    <td colSpan="4"><b>TOTAL</b></td>
                    <td >$ {totalPrice}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default TableComponent;