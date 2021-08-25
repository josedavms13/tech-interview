
import Product from "./product";

const store = [
    {
        item1 : new Product( 1,2000, 'item1', 5, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.')
    },{
        item2 : new Product( 2,10000, 'item2', 20, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.')
    },{
        item3 : new Product( 3,10000, 'item3', 20, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.')
    },{
        item4 : new Product( 4 ,10000, 'item4', 20, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.')
    },{
        item5 : new Product( 5,10000, 'item5', 20, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.')
    },{
        item6 : new Product( 6,10000, 'item6', 20, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.')
    },{
        item7 : new Product( 7 ,10000, 'item7', 20, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.')
    },
]

class Store {
    constructor() {
        this.items = store
    }

    getItems(){
        return this.items
    }

    updateItemStock(id, newStock){
        let itemToUpdateIndex = this.items.findIndex(element => element.id === id);
        this.items[itemToUpdateIndex] = newStock;

        return this
    }
}

export default Store