const addToDb = id => {
    const exists = localStorage.getItem('shopping_cart');
    let shopping_cart = {};
    if(!exists){
        shopping_cart[id] = 1;
    }
    else{
        shopping_cart = JSON.parse(exists);
        if(shopping_cart[id]){
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else{
            shopping_cart[id] = 1;
        }
    }
    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
}

const removeFromDb = id => {
    const exists = localStorage.getItem('shopping_cart');
    if(!exists){
        
    }
    else{
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
    }
}

export { addToDb, removeFromDb };