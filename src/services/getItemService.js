import Store from '../FAKE_API/fakeApi'

const store = new Store();

export const getItemService = () =>{

    return store.items
}