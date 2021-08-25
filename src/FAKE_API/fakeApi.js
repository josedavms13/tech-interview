
import Product from "./product";

const store = [
    {
        item : new Product( 0 ,10000, 'Halo', 20, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.', 'https://phantom-marca.unidadeditorial.es/41fa52c07bce77cf45741e263273660d/crop/0x0/1274x717/resize/660/f/webp/assets/multimedia/imagenes/2020/12/29/16092371711442.jpg')

    },{
        item : new Product( 1,120000, 'Red Dead Redemtion', 20, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.', 'https://http2.mlstatic.com/D_NQ_NP_796282-MLA46792649184_072021-O.webp' )
    },{
        item : new Product( 2,50000, 'Age of Empires', 20, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.', 'https://i.blogs.es/71d67e/aoe4_wallpaper_desktop-wide_2560x1440/1366_2000.jpeg')
    },{
        item : new Product( 3 ,60000, 'Queso crema', 122, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.', 'https://metrocolombiafood.vteximg.com.br/arquivos/ids/161794-750-750/7702129025201-1.jpg?v=636670255256870000')
    },{
        item : new Product( 4,102000, 'Horizon', 23, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.', 'https://i1.wp.com/www.gamerfocus.co/wp-content/uploads/2021/03/horizon_zero_dawn.jpg?w=1480&ssl=1')
    },{
        item : new Product( 5,20000, 'Vanishing of ethan carter', 45, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.', 'https://www.nintenderos.com/wp-content/uploads/2019/08/IMG_20190813_201117.jpg')
    },{
        item : new Product( 6,4000, 'cat', 30, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nulla.', 'https://i.kym-cdn.com/entries/icons/facebook/000/034/772/Untitled-1.jpg')
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